'use client'
import { useEffect, useRef, ReactNode } from 'react'

const MIN_SPEED = 1.5
const MAX_SPEED = 2.5

function randomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min
}

class BlobClass {
    el: HTMLElement
    size: number
    initialX: number
    initialY: number
    vx: number
    vy: number
    x: number
    y: number

    constructor(el: HTMLElement) {
        this.el = el
        const boundingRect = this.el.getBoundingClientRect()
        this.size = boundingRect.width
        this.initialX = randomNumber(0, window.innerWidth - this.size)
        this.initialY = randomNumber(0, window.innerHeight - this.size)
        this.el.style.top = `${this.initialY}px`
        this.el.style.left = `${this.initialX}px`
        this.vx = randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1)
        this.vy = randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1)
        this.x = this.initialX
        this.y = this.initialY
    }

    update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x >= window.innerWidth - this.size) {
            this.x = window.innerWidth - this.size
            this.vx *= -1
        }
        if (this.y >= window.innerHeight - this.size) {
            this.y = window.innerHeight - this.size
            this.vy *= -1
        }
        if (this.x <= 0) {
            this.x = 0
            this.vx *= -1
        }
        if (this.y <= 0) {
            this.y = 0
            this.vy *= -1
        }
    }

    move() {
        this.el.style.transform = `translate(${this.x - this.initialX}px, ${this.y - this.initialY}px)`
    }
}

interface BouncingBlobsWrapperProps {
    children: ReactNode
    className?: string
}

export default function BouncingBlobsWrapper({
    children,
    className = '',
}: BouncingBlobsWrapperProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const animationFrameRef = useRef<number | null>(null)
    const blobsRef = useRef<BlobClass[]>([])

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current
        const blobEls = container.querySelectorAll<HTMLElement>('.bouncing-blob')
        
        if (blobEls.length === 0) return

        const blobs = Array.from(blobEls).map((blobEl) => new BlobClass(blobEl))
        blobsRef.current = blobs

        function update() {
            blobs.forEach((blob) => {
                blob.update()
                blob.move()
            })
            animationFrameRef.current = requestAnimationFrame(update)
        }

        animationFrameRef.current = requestAnimationFrame(update)

        // Handle window resize
        const handleResize = () => {
            blobs.forEach((blob) => {
                // Recalculate position if blob goes out of bounds
                if (blob.x > window.innerWidth - blob.size) {
                    blob.x = window.innerWidth - blob.size
                }
                if (blob.y > window.innerHeight - blob.size) {
                    blob.y = window.innerHeight - blob.size
                }
            })
        }

        window.addEventListener('resize', handleResize)

        // Cleanup function
        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current)
            }
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    )
}
