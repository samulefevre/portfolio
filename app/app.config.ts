export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
      neutral: 'slate',
    },
    container: {
      base: 'px-5 sm:px-10 lg:px-10',
    },
    pageSection: {
      slots: {
        container: 'py-21 sm:py-24 lg:py-32 max-[700px]:py-[85px]',
        header: 'text-left',
        headline: 'mb-8 justify-start! gap-3 font-mono text-[0.72rem] font-medium uppercase tracking-[0.12em] text-primary',
        title: 'text-left! font-display text-[clamp(2.8rem,4.6vw,4.6rem)] sm:text-[clamp(2.8rem,4.6vw,4.6rem)] lg:text-[clamp(2.8rem,4.6vw,4.6rem)] max-[700px]:text-[clamp(2.6rem,9vw,4rem)] leading-[1.08] tracking-[-0.035em] text-highlighted text-wrap-normal',
        description: 'mt-6 max-w-[550px] text-left! text-[1.03rem] leading-[1.75] text-muted text-wrap-normal',
      },
    },
    pageHero: {
      slots: {
        headline: 'mb-8 justify-start',
        title: 'font-display leading-[1.08] tracking-[-0.04em] text-highlighted text-wrap-normal',
        description: 'mt-6 leading-[1.7] text-muted text-wrap-normal',
      },
    },
    pageFeature: {
      slots: {
        title: 'font-display font-bold tracking-[-0.01em]',
        description: 'leading-[1.7] text-muted',
      },
    },
    pageCard: {
      slots: {
        title: 'font-display font-bold tracking-[-0.01em]',
        description: 'leading-[1.7] text-muted',
      },
    },
    header: {
      slots: {
        root: 'bg-default border-default backdrop-blur-none',
      },
    },
    footer: {
      slots: {
        root: 'bg-[var(--portfolio-footer)] text-[#93adbe]',
        container: 'flex items-center justify-between gap-8 py-[1.8rem] font-mono text-[.72rem] max-[700px]:flex-wrap',
        left: 'order-0 m-0 flex-none',
        center: 'order-1 m-0 flex-none',
        right: 'order-2 m-0 flex-none gap-7',
      },
    },
    badge: {
      slots: {
        base: 'font-mono',
      },
    },
    button: {
      slots: {
        base: 'transition-[color,background-color,border-color,box-shadow,transform,translate,scale] duration-150 ease-out active:scale-[.97]',
      },
    },
  },
})
