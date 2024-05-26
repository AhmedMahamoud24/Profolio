import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about-section">
      {}
      <Headings title="About" subtitle="Hi, I'm Ahmed Mahamoud." />{''}
      {}
      <p className="about-text">
        I&apos;m a 23-year-old self-taught frontend developer. I found my
        passion for programming after discovering my brother was doing it. What
        kept me on this journey is that I always find learning new things
        exciting and facing unfamiliar challenges. In addition to coding, I
        enjoy building side projects, writing blog posts, and reading books.
        When I&apos;m not doing anything coding-related, I enjoy spending time
        with my family and working out.
        {/* 🔗 Update the href attribute with your Instagram link */}
        Follow my
        <a className="about-link" href="https://github.com/AhmedMahamoud24" target="_blank" rel="noreferrer">
          Github
          {/* 🔄 Change 'Instagram' to your preferred social media or remove if not applicable */}
        </a>{''}
        to see my journey!
      </p>
    </div>
  )
})

About.displayName = 'About'

export { About }
