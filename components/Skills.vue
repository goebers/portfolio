<template>
  <div class="skills">
    <h1 class="title">
      Skills
    </h1>
    <p class="paragraph">
      Below are listed some technologies that I have used previously, either in school or professional manner at work.
    </p>
    <div class="tech-list-wrapper">
      <ul class="tech-list">
        <h3 class="small-title">
          Web front-end
        </h3>
        <li class="small-paragraph">
          HTML, CSS & JS
        </li>
        <li class="small-paragraph">
          Vue.js & Nuxt.js
        </li>
        <li class="small-paragraph">
          Angular 2
        </li>
        <li class="small-paragraph">
          React
        </li>
        <li class="small-paragraph">
          Node.js
        </li>
        <li class="small-paragraph">
          PHP
        </li>
        <li class="small-paragraph">
          Wordpress
        </li>
      </ul>
      <ul class="tech-list">
        <h3 class="small-title">
          Mobile
        </h3>
        <li class="small-paragraph">
          Native Android apps with Java & Kotlin
        </li>
        <li class="small-paragraph">
          Native iOS apps with Swift
        </li>
        <li class="small-paragraph">
          Hybrid apps with Ionic
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
          Other
        </h3>
        <li class="small-paragraph">
          Unity game engine with C#
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
}

@media only screen and (min-width: $breakpoint-small-desktop) {
  .tech-list-wrapper {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .tech-list {
    flex: 0 0 50%;
    margin-bottom: 1.5rem;
  }

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
