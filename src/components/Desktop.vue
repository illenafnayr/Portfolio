<template>
  <div id="desktop">
    <span id="title">Studio Fanelli</span>
    <Icon
      name="cli"
      title="CMD PROMPT"
      filename="cli.png"
      :draggable="true"
      @dblclick="showCli()"
      @touchend="showCli()" />
    <CLI @createDirectory="createDirectory" />

    <Icon
      name="email"
      title="Email"
      filename="Mail.png"
      :draggable="true"
      @dblclick="showEmail()"
      @touchend="showEmail()" />
    <Email />

    <Icon
      name="resume"
      title="Resume"
      filename="Resume-Icon.png"
      :draggable="true"
      @dblclick="showResume()"
      @touchend="showResume()" />
    <Resume v-bind:style="{ display: isActive ? 'block' : 'none' }" />

    <Icon
      name="portfolio"
      title="Portfolio"
      filename="DocumentsFolder.png"
      :draggable="true"
      @dblclick="showPortfolio()"
      @touchend="showPortfolio()" />
    <Portfolio v-bind:style="{ display: isActive ? 'block' : 'none' }" />

    <Icon
      name="aboutme"
      title="README.txt"
      filename="Pin-sheet.png"
      :draggable="true"
      @dblclick="showAboutMe()"
      @touchend="showAboutMe()" />
    <AboutMe v-bind:style="{ display: isActive ? 'block' : 'none' }" />

    <Icon
      name="game-selector"
      title="Games!"
      filename="DocumentsFolder.png"
      :draggable="true"
      v-on:dblclick="showGameSelector()" @touchend="showGameSelector()" />
    <GameSelector v-bind:style="{ display: isActive ? 'block' : 'none' }" />

    <div v-for="(directory, i) in directories" :key="i">
      <Icon
        :name=directory.name
        :title=directory.name
        filename="DocumentsFolder.png"
        :draggable="true"
        @dblclick="showDirectory(directory.id)" @touchend="showDirectory(directory.id)" />
      <Directory :name="directory.name" :directories="directories" />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import CLI from '@/components/CLI.vue'
import Email from '@/components/Email.vue'
import Resume from '@/components/Resume.vue'
import Portfolio from '@/components/Portfolio.vue'
import AboutMe from '@/components/AboutMe.vue'
import GameSelector from './games/GameSelector.vue'
import Directory from './Directory.vue'
import Icon from './Icon.vue'

export default {
  name: 'Desktop',
  components: {
    Icon,
    CLI,
    Email,
    Resume,
    Portfolio,
    AboutMe,
    GameSelector,
    Directory
  },
  data() {
    return {
      isActive: false,
      directories: [],
    }
  },
  methods: {
    showAboutMe() {
      document.querySelector('#aboutme-container').style.display = "block"
    },
    showPortfolio() {
      document.querySelector('#portfolio-container').style.display = "block"
    },
    showResume() {
      document.querySelector('#resume-container').style.display = "block"
    },
    showEmail() {
      document.querySelector('#email-container').style.display = "block"
    },
    showCli() {
      document.querySelector('#cli-container').style.display = "block"
      let input = document.querySelector('#command');
      input.focus();
      input.select();
    },
    showGameSelector() {
      if (document.querySelector('#game-selector-container').style.display === "none") {
        document.querySelector('#game-selector-container').style.display = "block"
      }
    },
    createDirectory(name) {
      this.directories.push(
        {
          id: name.split(' ').join(''),
          name: name
        }
      );
    },
    showDirectory(id) {
      if (document.querySelector(`#${id}-directory-container`).style.display === "none") {
        document.querySelector(`#${id}-directory-container`).style.display = "block"
      }
    }
  }
}
</script>

<style lang="scss">
@import '../styles/global.scss';
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");

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
  font-family: "VT323", monospace;
  color: whitesmoke;
}
</style>
