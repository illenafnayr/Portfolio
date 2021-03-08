<template>
  <div id="desktop">
    <span id="title">Studio Fanelli</span>
    <CLIIcon v-on:dblclick="showCli()" @touchend="showCli()"/>
    <CLI />
    <EmailIcon v-on:dblclick="showEmail()" @touchend="showEmail()"/>
    <Email />
    <ResumeIcon v-on:dblclick="showResume()" @touchend="showResume()"/>
    <Resume v-bind:style='{"display": (isActive? "block" : "none")}' />
    <Portfolio v-bind:style='{"display": (isActive? "block" : "none")}' />
    <PortfolioIcon v-on:dblclick="showPortfolio()" @touchend="showPortfolio()"/>
    <ReadMe v-on:dblclick="showAboutMe()" @touchend="showAboutMe()"/>
    <AboutMe v-bind:style='{"display": (isActive? "block" : "none")}'/>
  </div>
</template>

<script>
// @ is an alias to /src
import CLIIcon from '@/components/CLIIcon.vue'
import CLI from '@/components/CLI.vue'
import EmailIcon from '@/components/EmailIcon.vue'
import Email from '@/components/Email.vue'
import ResumeIcon from '@/components/ResumeIcon.vue'
import Resume from '@/components/Resume.vue'
import AboutMe from '@/components/AboutMe.vue'
import ReadMe from '@/components/ReadMe.vue'
import PortfolioIcon from '@/components/PortfolioIcon.vue'
import Portfolio from '@/components/Portfolio.vue'

export default {
  name: 'Desktop',
  components: {
    CLIIcon,
    CLI,
    EmailIcon,
    Email,
    ReadMe,
    ResumeIcon,
    Resume,
    Portfolio,
    PortfolioIcon,
    AboutMe
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    showAboutMe() {
      if (document.querySelector('#draggable-container').style.display === "none") {
        document.querySelector('#draggable-container').style.display = "block"
      }
    },
    showPortfolio() {
      if (document.querySelector('#portfolio-container').style.display === "none") {
        document.querySelector('#portfolio-container').style.display = "block"
      }
    },
    showResume() {
      if (document.querySelector('#resume-container').style.display === "none") {
        document.querySelector('#resume-container').style.display = "block"
      }
    },
    showEmail() {
        document.querySelector('#email-container').style.display = "block"
    },
    showCli() {
        document.querySelector('#cli-container').style.display = "block"
        let input = document.querySelector('#command');
        input.focus();
        input.select();
    }    
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

#desktop {
  height: calc(100vh - 54px);
  width: 100vw;
  /* border: 1px solid gold; */
}

#title {
  position: absolute;
  top: 35%;
  left: 25%;
  font-size: 4.7rem;
  font-family: 'VT323', monospace;
  color: whitesmoke
}
  
</style>
