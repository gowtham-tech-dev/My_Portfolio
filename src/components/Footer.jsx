function Footer() {
  return (
    <footer className="py-8 bg-bg-primary text-center z-10 relative border-t border-border-glass">
      <p className="text-sm md:text-base font-heading font-medium text-text-secondary tracking-wider">
        &copy; {new Date().getFullYear()} <span className="text-[var(--color-neon-purple)]">Gowtham N</span>. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer