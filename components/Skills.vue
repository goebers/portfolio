<template>
  <div class="skills">
    <h1 class="title">
      Skills
    </h1>
    <p class="paragraph">
      Below are listed some technologies, methods & platforms that I have used previously, and feel competent with, either in school or in professional manner at work.
    </p>
    <div class="tech-list-wrapper">
      <ul class="tech-list">
        <h3 class="small-title">
          Web
        </h3>
        <li class="small-paragraph">
          HTML, CSS & JS
        </li>
        <li class="small-paragraph">
          Vue.js
        </li>
        <li class="small-paragraph">
          Angular 2
        </li>
        <li class="small-paragraph">
          React
        </li>
        <li class="small-paragraph">
          PHP
        </li>
        <li class="small-paragraph">
          Wordpress
        </li>
        <li class="small-paragraph">
          Magento 1 & 2
        </li>
      </ul>
      <ul class="tech-list">
        <h3 class="small-title">
          Mobile
        </h3>
        <li class="small-paragraph">
          Java (Native Android)
        </li>
        <li class="small-paragraph">
          Kotlin (Native Android)
        </li>
        <li class="small-paragraph">
          Swift (Native iOS)
        </li>
        <li class="small-paragraph">
          Ionic (Hybrid app)
        </li>
      </ul>
      <ul class="tech-list">
        <h3 class="small-title">
          Design
        </h3>
        <li class="small-paragraph">
          Adobe XD
        </li>
        <li class="small-paragraph">
          Figma
        </li>
        <li class="small-paragraph">
          Zeplin
        </li>
      </ul>
      <ul class="tech-list">
        <h3 class="small-title">
          Version control
        </h3>
        <li class="small-paragraph">
          Git
        </li>
        <li class="small-paragraph">
          SVN
        </li>
        <li class="small-paragraph">
          GitHub
        </li>
        <li class="small-paragraph">
          Bitbucket
        </li>
        <li class="small-paragraph">
          GitLab
        </li>
      </ul>
      <ul class="tech-list">
        <h3 class="small-title">
          Depedency & package management
        </h3>
        <li class="small-paragraph">
          Node Package Manager
        </li>
        <li class="small-paragraph">
          Composer
        </li>
        <li class="small-paragraph">
          Yarn
        </li>
        <li class="small-paragraph">
          Homebrew
        </li>
        <li class="small-paragraph">
          APT
        </li>
      </ul>
      <ul class="tech-list">
        <h3 class="small-title">
          Project management
        </h3>
        <li class="small-paragraph">
          Scrum
        </li>
        <li class="small-paragraph">
          Trello
        </li>
        <li class="small-paragraph">
          Jira
        </li>
      </ul>
      <ul class="tech-list">
        <h3 class="small-title">
          APIs & databases
        </h3>
        <li class="small-paragraph">
          GraphQL
        </li>
        <li class="small-paragraph">
          Node.js
        </li>
        <li class="small-paragraph">
          Express.js
        </li>
        <li class="small-paragraph">
          MySQL / MariaDB
        </li>
        <li class="small-paragraph">
          MongoDB
        </li>
        <li class="small-paragraph">
          PostgreSQL
        </li>
      </ul>
      <ul class="tech-list">
        <h3 class="small-title">
          Operating systems
        </h3>
        <li class="small-paragraph">
          Windows
        </li>
        <li class="small-paragraph">
          Linux (Ubuntu & Manjaro)
        </li>
        <li class="small-paragraph">
          MacOS
        </li>
      </ul>
      <ul class="tech-list">
        <h3 class="small-title">
          Other
        </h3>
        <li class="small-paragraph">
          Some games with Unity engine & C#
        </li>
        <li class="small-paragraph">
          Some dabbling with machine learning
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Skills'
}
</script>
<style scoped lang="scss">
.skills {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

.tech-list-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

.tech-list {
  flex: 0 0 100%;
  margin-bottom: 1rem;

  li {
    margin-left: 1em;
    list-style-type: disc;
    list-style-position: outside;
  }
}

.title {
  margin-bottom: 1.5rem;
}

.paragraph {
  margin-bottom: 1.25rem;
}

.small-title {
  margin-bottom: 0.5rem;
}

.small-paragraph {
  margin-bottom: 0.25rem;
}

@media only screen and (min-width: $breakpoint-large-mobile) {
  .title {
    margin-bottom: 1.75rem;
  }

  .paragraph {
    margin-bottom: 1.5rem;
  }

  .small-title {
    margin-bottom: 0.75rem;
  }

  .small-paragraph {
    margin-bottom: 0.5rem;
  }

  .tech-list-wrapper {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .tech-list {
    flex: 0 0 50%;
    margin-bottom: 1.5rem;
  }
}

@media only screen and (min-width: $breakpoint-small-desktop) {
  .title {
    margin-bottom: 2rem;
  }

  .paragraph {
    margin-bottom: 1.75rem;
  }

  .small-title {
    margin-bottom: 1rem;
  }

  .small-paragraph {
    margin-bottom: 0.75rem;
  }
}
</style>
