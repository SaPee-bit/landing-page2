import { ThemeProvider, ThemeContext } from "./themeContext/ThemeContext"
import { useContext, useEffect, useState } from "react"
import classNames from "classnames"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Stats } from "./components/Stats"
import { Alt } from "./components/Alt"
import { Client } from "./components/Client"
import { Testimonials } from "./components/Testimonials"
import { Service } from "./components/Service"
import { Action } from "./components/Action"
import { Team } from "./components/Team"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import Aos from "aos"
import 'aos/dist/aos.css'


const AppContent = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext) // Use context to access theme state
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
    Aos.init({
      duration: 600,
      easing: 'ease-in-out',
      once: false,
      mirror: false
    })
    /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
    const toggleScrolled = () => {
      const body = document.querySelector("body")
      const header = document.querySelector("#header")
      if (
        header &&
        (header.classList.contains("scroll-up-sticky") ||
          header.classList.contains("sticky-top") ||
          header.classList.contains("fixed-top"))
      ) {
        window.scrollY > 100
          ? body.classList.add("scrolled")
          : body.classList.remove("scrolled")
      }
    }

    window.addEventListener("scroll", toggleScrolled)
    toggleScrolled()

    
    // Mobile nav toggle
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    const toggleMobileNav = () => {
      const body = document.querySelector("body")
      body.classList.toggle("mobile-nav-active")
      mobileNavToggleBtn.classList.toggle("bi-list")
      mobileNavToggleBtn.classList.toggle("bi-x")
    }

    if (mobileNavToggleBtn) {
      console.log("Click statuse:", toggleMobileNav)
      mobileNavToggleBtn.addEventListener("click", toggleMobileNav)
    }

    /**
   * Hide mobile nav on same-page/hash links
   */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          toggleMobileNav()
        }
      })

    })

    /**
   * Toggle mobile nav dropdowns
   */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active')
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation()
      })
    })

    // Preloader
    const preloader = document.querySelector("#preloader")
    if (preloader) {
      window.addEventListener("load", () => preloader.remove())
    }

    // Scroll to top
    const scrollTop = document.querySelector(".scroll-top")
    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active")
      }
    }

    if (scrollTop) {
      scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }

    window.addEventListener("load", toggleScrollTop)
    document.addEventListener('scroll', toggleScrollTop)
    toggleScrollTop()

       /**
   * Animation on scroll function and init
  */
    function aosInit() {
      Aos.init({
        duration: 600,
        easing: 'ease-in-out',
        once: false,
        mirror: false
      })
    }
    window.addEventListener('load', aosInit) 

    // Navmenu Scrollspy
    const navMenuLinks = document.querySelectorAll(".navmenu a")
    const navmenuScrollspy = () => {
      navMenuLinks.forEach((link) => {
        if (!link.hash) return;
        const section = document.querySelector(link.hash)
        if (!section) return
        const position = window.scrollY + 200
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          document
            .querySelectorAll(".navmenu a.active")
            .forEach((activeLink) => activeLink.classList.remove("active"));
          link.classList.add("active")
        } else {
          link.classList.remove("active")
        }
      })
    }

    window.addEventListener("scroll", navmenuScrollspy)
    navmenuScrollspy()

    return () => {
      window.removeEventListener("scroll", toggleScrolled)
      window.removeEventListener("scroll", toggleScrollTop)
      window.removeEventListener("scroll", navmenuScrollspy)
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener("click", toggleMobileNav)
      }
    }

  }, [])

  if (loading) return (
    <div className="loading">
      <span>.</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  ) // You can show a loading spinner or placeholder

  return (
    <div className={classNames('app-container', { 'dark': isDarkMode, 'light': !isDarkMode })}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className="main">
        <Hero />
        <About />
        <Projects />
        <Stats isDarkMode={isDarkMode} />
        <Alt />
        <Client />
        <Testimonials />
        <Service isDarkMode={isDarkMode} />
        <Action />
        <Team isDarkMode={isDarkMode} />
        <Contact />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
  
)// The root DOM element where your app is mounted