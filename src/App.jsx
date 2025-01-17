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
import { useEffect } from "react"
import './App.css'

export const App = () => {
  useEffect(() => {
    // Apply .scrolled class to the body
    const toggleScrolled = () => {
      const body = document.querySelector("body");
      const header = document.querySelector("#header");
      if (
        header &&
        (header.classList.contains("scroll-up-sticky") ||
          header.classList.contains("sticky-top") ||
          header.classList.contains("fixed-top"))
      ) {
        window.scrollY > 100
          ? body.classList.add("scrolled")
          : body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", toggleScrolled);
    toggleScrolled();

    // Mobile nav toggle
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    const toggleMobileNav = () => {
      const body = document.querySelector("body");
      body.classList.toggle("mobile-nav-active");
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    };

    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", toggleMobileNav);
    }

    // Preloader
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      window.addEventListener("load", () => preloader.remove());
    }

    // Scroll to top
    const scrollTop = document.querySelector(".scroll-top");
    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      }
    };

    if (scrollTop) {
      scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }

    window.addEventListener("scroll", toggleScrollTop);
    toggleScrollTop();

    // Navmenu Scrollspy
    const navMenuLinks = document.querySelectorAll(".navmenu a");
    const navmenuScrollspy = () => {
      navMenuLinks.forEach((link) => {
        if (!link.hash) return;
        const section = document.querySelector(link.hash);
        if (!section) return;
        const position = window.scrollY + 200;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          document
            .querySelectorAll(".navmenu a.active")
            .forEach((activeLink) => activeLink.classList.remove("active"));
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", navmenuScrollspy);
    navmenuScrollspy();

    return () => {
      window.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("scroll", toggleScrollTop);
      window.removeEventListener("scroll", navmenuScrollspy);
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener("click", toggleMobileNav);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Projects />
        <Stats />
        <Alt />
        <Client />
        <Testimonials />
        <Service />
        <Action />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
