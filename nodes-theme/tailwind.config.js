/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["14px", "20px"],
      sm: ["16px", "24px"],
      md: ["18px", "28px"],
      lg: ["20px", "34px"],
      lg_2x: ["36px", "52px"],
      lg_3x: ["48px", "64px"],
      lg_4x: ["64px", "84px"],
      lg_5x: ["72px", "108px"],
      lg_6x: ["96px", "132px"],
    },
    extend: {
      backgroundImage: {
        "orchid-twilight":
          "linear-gradient(75deg, #C165DD 22.25%, #5C27FE 79.46%)",
        website: "linear-gradient(72deg, #658DF5 59.9%, #1153FC 85.95%)",
        "gradient-3":
          "linear-gradient(90deg, #4484FF -0.55%, #44B0FF 22.86%, #FF44EC 48.36%, #44A5FF 73.33%, #F2FF5E 99.34%)",
        "gradient-4":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 59.25%, #ffffff 80.63%, lightgray 77.404% 69.12%, #F0F1F3, #FFF)",
          "lavender-bloom":
          "linear-gradient(45deg, #6E4AFF 0%, #CCBFFF 100%)",
      },
      boxShadow: {
        "background-xsm": "0 2px 2px 2px rgba(0, 0, 0, 0.16)",
        "background-sm": "0 8px 10px rgba(0, 0, 0, 0.06)",
        "background-md": "0 16px 18px rgba(0, 0, 0, 0.06)",
        "background-lg": "0 16px 18px rgba(0, 0, 0, 0.06)",
        "background-xlg": "0 32px 36px rgba(0, 0, 0, 0.06)",
        "background-xlg-3x": "0 64px 64px rgba(0, 0, 0, 0.06)",
        "button-xsm": "0 2px 2px 2px rgba(0, 0, 0, 0.24)",
        "button-sm": "0 8px 10px rgba(0, 0, 0, 0.06)",
        "button-md": "0 16px 18px rgba(0, 0, 0, 0.06)",
        "button-lg": "0 32px 36px rgba(0, 0, 0, 0.06)",
        "badge-sm": "0 2px 2px rgba(0, 0, 0, 0.16)",
      },
      colors: {
        "background-fill-central": "var(--background-fill-central)",
        "background-fill-heart": "var(--background-fill-heart)",
        "background-fill-inner": "var(--background-fill-inner)",
        "background-fill-middle": "var(--background-fill-middle)",
        "background-fill-outermost": "var(--background-fill-outermost)",
        "background-fill-surface": "var(--background-fill-surface)",
        "background-fill-white": "var(--background-fill-white)",
        "background-stroke-central": "var(--background-stroke-central)",
        "background-stroke-heart": "var(--background-stroke-heart)",
        "background-stroke-inner": "var(--background-stroke-inner)",
        "background-stroke-middle": "var(--background-stroke-middle)",
        "background-stroke-outermost": "var(--background-stroke-outermost)",
        "background-stroke-surface": "var(--background-stroke-surface)",
        "component-reversed": "var(--component-reversed)",
        "component-fill-dark": "var(--component-fill-dark)",
        "component-fill-dark-soft": "var(--component-fill-dark-soft)",
        "component-fill-disabled": "var(--component-fill-disabled)",
        "component-fill-light": "var(--component-fill-light)",
        "component-fill-light-fixed": "var(--component-fill-light-fixed)",
        "component-fill-negative": "var(--component-fill-negative)",
        "component-fill-negative-soft": "var(--component-fill-negative-soft)",
        "component-fill-positive": "var(--component-fill-positive)",
        "component-fill-positive-sfot": "var(--component-fill-positive-sfot)",
        "component-fill-primary": "var(--component-fill-primary)",
        "component-fill-primary-soft": "var(--component-fill-primary-soft)",
        "component-fill-secondary": "var(--component-fill-secondary)",
        "component-fill-secondary-soft": "var(--component-fill-secondary-soft)",
        "component-fill-tertiary": "var(--component-fill-tertiary)",
        "component-fill-tertiary-soft": "var(--component-fill-tertiary-soft)",
        "component-fill-warning": "var(--component-fill-warning)",
        "component-fill-warning-soft": "var(--component-fill-warning-soft)",
        "component-stroke-dark": "var(--component-stroke-dark)",
        "component-stroke-dark-soft": "var(--component-stroke-dark-soft)",
        "component-stroke-disabled": "var(--component-stroke-disabled)",
        "component-stroke-light-fixed": "var(--component-stroke-light-fixed)",
        "component-stroke-negative": "var(--component-stroke-negative)",
        "component-stroke-negative-soft":
          "var(--component-stroke-negative-soft)",
        "component-stroke-positive": "var(--component-stroke-positive)",
        "component-stroke-positive-soft":
          "var(--component-stroke-positive-soft)",
        "component-stroke-primary": "var(--component-stroke-primary)",
        "component-stroke-primary-soft": "var(--component-stroke-primary-soft)",
        "component-stroke-secondary": "var(--component-stroke-secondary)",
        "component-stroke-secondary-soft":
          "var(--component-stroke-secondary-soft)",
        "component-stroke-tertiary": "var(--component-stroke-tertiary)",
        "component-stroke-tertiary-soft":
          "var(--component-stroke-tertiary-soft)",
        "component-stroke-warning": "var(--component-stroke-warning)",
        "component-stroke-warning-soft": "var(--component-stroke-warning-soft)",
        "component-text-dark": "var(--component-text-dark)",
        "component-text-dark-hover": "var(--component-text-dark-hover)",
        "component-text-disabled": "var(--component-text-disabled)",
        "component-text-gray": "var(--component-text-gray)",
        "component-text-gray-hover": "var(--component-text-gray-hover)",
        "component-text-light": "var(--component-text-light)",
        "component-text-light-fixed": "var(--component-text-light-fixed)",
        "component-text-negative": "var(--component-text-negative)",
        "component-text-negative-hover": "var(--component-text-negative-hover)",
        "component-text-positive": "var(--component-text-positive)",
        "component-text-positive-hover": "var(--component-text-positive-hover)",
        "component-text-primary": "var(--component-text-primary)",
        "component-text-primary-hover": "var(--component-text-primary-hover)",
        "component-text-secondary": "var(--component-text-secondary)",
        "component-text-secondary-hover":
          "var(--component-text-secondary-hover)",
        "component-text-tertiary": "var(--component-text-tertiary)",
        "component-text-tertiary-hover": "var(--component-text-tertiary-hover)",
        "component-text-warning": "var(--component-text-warning)",
        "component-text-warning-hover": "var(--component-text-warning-hover)",
        "component-hover-dark": "var(--component-hover-dark)",
        "component-hover-dark-soft": "var(--component-hover-dark-soft)",
        "component-hover-gray": "var(--component-hover-gray)",
        "component-hover-light": "var(--component-hover-light)",
        "component-hover-light-fixed": "var(--component-hover-light-fixed)",
        "component-hover-negative": "var(--component-hover-negative)",
        "component-hover-negative-light":
          "var(--component-hover-negative-light)",
        "component-hover-negative-soft": "var(--component-hover-negative-soft)",
        "component-hover-positive": "var(--component-hover-positive)",
        "component-hover-positive-light":
          "var(--component-hover-positive-light)",
        "component-hover-positive-soft": "var(--component-hover-positive-soft)",
        "component-hover-primary": "var(--component-hover-primary)",
        "component-hover-primary-light": "var(--component-hover-primary-light)",
        "component-hover-primary-soft": "var(--component-hover-primary-soft)",
        "component-hover-secondary": "var(--component-hover-secondary)",
        "component-hover-secondary-light":
          "var(--component-hover-secondary-light)",
        "component-hover-secondary-soft":
          "var(--component-hover-secondary-soft)",
        "component-hover-tertiary": "var(--component-hover-tertiary)",
        "component-hover-tertiary-light":
          "var(--component-hover-tertiary-light)",
        "component-hover-tertiary-soft": "var(--component-hover-tertiary-soft)",
        "component-hover-warning": "var(--component-hover-warning)",
        "component-hover-warning-light": "var(--component-hover-warning-light)",
        "component-hover-warning-soft": "var(--component-hover-warning-soft)",
        "container-fill-dark": "var(--container-fill-dark)",
        "container-fill-dark-soft": "var(--container-fill-dark-soft)",
        "container-fill-disabled": "var(--container-fill-disabled)",
        "container-fill-light": "var(--container-fill-light)",
        "container-fill-light-fixed": "var(--container-fill-light-fixed)",
        "container-fill-negative": "var(--container-fill-negative)",
        "container-fill-negative-soft": "var(--container-fill-negative-soft)",
        "container-fill-positive": "var(--container-fill-positive)",
        "container-fill-positive-sfot": "var(--container-fill-positive-sfot)",
        "container-fill-primary": "var(--container-fill-primary)",
        "container-fill-primary-soft": "var(--container-fill-primary-soft)",
        "container-fill-secondary": "var(--container-fill-secondary)",
        "container-fill-secondary-soft": "var(--container-fill-secondary-soft)",
        "container-fill-tertiary": "var(--container-fill-tertiary)",
        "container-fill-tertiary-soft": "var(--container-fill-tertiary-soft)",
        "container-fill-warning": "var(--container-fill-warning)",
        "container-fill-warning-soft": "var(--container-fill-warning-soft)",
        "container-stroke-dark": "var(--container-stroke-dark)",
        "container-stroke-dark-soft": "var(--container-stroke-dark-soft)",
        "container-stroke-disabled": "var(--container-stroke-disabled)",
        "container-stroke-negative": "var(--container-stroke-negative)",
        "container-stroke-negative-soft":
          "var(--container-stroke-negative-soft)",
        "container-stroke-positive": "var(--container-stroke-positive)",
        "container-stroke-positive-soft":
          "var(--container-stroke-positive-soft)",
        "container-stroke-primary": "var(--container-stroke-primary)",
        "container-stroke-primary-soft": "var(--container-stroke-primary-soft)",
        "container-stroke-secondary": "var(--container-stroke-secondary)",
        "container-stroke-secondary-soft":
          "var(--container-stroke-secondary-soft)",
        "container-stroke-tertiary": "var(--container-stroke-tertiary)",
        "container-stroke-tertiary-soft":
          "var(--container-stroke-tertiary-soft)",
        "container-stroke-warning": "var(--container-stroke-warning)",
        "container-stroke-warning-soft": "var(--container-stroke-warning-soft)",
        "container-text-dark": "var(--container-text-dark)",
        "container-text-dark-hover": "var(--container-text-dark-hover)",
        "container-text-disabled": "var(--container-text-disabled)",
        "container-text-gray": "var(--container-text-gray)",
        "container-text-light": "var(--container-text-light)",
        "container-text-light-fixed": "var(--container-text-light-fixed)",
        "container-text-negative": "var(--container-text-negative)",
        "container-text-negative-hover": "var(--container-text-negative-hover)",
        "container-text-positive": "var(--container-text-positive)",
        "container-text-positive-hover": "var(--container-text-positive-hover)",
        "container-text-primary": "var(--container-text-primary)",
        "container-text-primary-hover": "var(--container-text-primary-hover)",
        "container-text-secondary": "var(--container-text-secondary)",
        "container-text-secondary-hover":
          "var(--container-text-secondary-hover)",
        "container-text-tertiary": "var(--container-text-tertiary)",
        "container-text-tertiary-hover": "var(--container-text-tertiary-hover)",
        "container-text-warning": "var(--container-text-warning)",
        "container-text-warning-hover": "var(--container-text-warning-hover)",
        "container-hover-dark": "var(--container-hover-dark)",
        "container-hover-dark-soft": "var(--container-hover-dark-soft)",
        "container-hover-gray": "var(--container-hover-gray)",
        "container-hover-light": "var(--container-hover-light)",
        "container-hover-negative": "var(--container-hover-negative)",
        "container-hover-negative-soft": "var(--container-hover-negative-soft)",
        "container-hover-positive": "var(--container-hover-positive)",
        "container-hover-positive-soft": "var(--container-hover-positive-soft)",
        "container-hover-primary": "var(--container-hover-primary)",
        "container-hover-primary-soft": "var(--container-hover-primary-soft)",
        "container-hover-secondary": "var(--container-hover-secondary)",
        "container-hover-secondary-soft":
          "var(--container-hover-secondary-soft)",
        "container-hover-tertiary": "var(--container-hover-tertiary)",
        "container-hover-tertiary-soft": "var(--container-hover-tertiary-soft)",
        "container-hover-warning": "var(--container-hover-warning)",
        "container-hover-warning-soft": "var(--container-hover-warning-soft)",
        "default-icon-dark": "var(--default-icon-dark)",
        "default-icon-disabled": "var(--default-icon-disabled)",
        "default-icon-gray": "var(--default-icon-gray)",
        "default-icon-light-fixed": "var(--default-icon-light-fixed)",
        "default-icon-negative": "var(--default-icon-negative)",
        "default-icon-positive": "var(--default-icon-positive)",
        "default-icon-primary": "var(--default-icon-primary)",
        "default-icon-secondary": "var(--default-icon-secondary)",
        "default-icon-tertiary": "var(--default-icon-tertiary)",
        "default-icon-warning": "var(--default-icon-warning)",
        "icon-hover-dark": "var(--icon-hover-dark)",
        "icon-hover-gray": "var(--icon-hover-gray)",
        "icon-hover-negative": "var(--icon-hover-negative)",
        "icon-hover-positive": "var(--icon-hover-positive)",
        "icon-hover-primary": "var(--icon-hover-primary)",
        "icon-hover-secondary": "var(--icon-hover-secondary)",
        "icon-hover-tertiary": "var(--icon-hover-tertiary)",
        "icon-hover-warning": "var(--icon-hover-warning)",
        "typography-body": "var(--typography-body)",
        "typography-body-light": "var(--typography-body-light)",
        "typography-body-soft": "var(--typography-body-soft)",
        "typography-caption": "var(--typography-caption)",
        "typography-caption-light": "var(--typography-caption-light)",
        "typography-caption-soft": "var(--typography-caption-soft)",
        "typography-display": "var(--typography-display)",
        "typography-display-light": "var(--typography-display-light)",
        "typography-heading": "var(--typography-heading)",
        "typography-heading-light": "var(--typography-heading-light)",
        "typography-paragraph-soft": "var(--typography-paragraph-soft)",
        "typography-sub-heading": "var(--typography-sub-heading)",
        "typography-sub-heading-soft": "var(--typography-sub-heading-soft)",
      },
    },
  },
  plugins: [],
};
