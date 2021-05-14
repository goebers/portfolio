<template>
  <div class="skills">
    <h1 class="title">
      Skills
    </h1>
    <p class="paragraph">
      Below are listed some technologies, methods & platforms that I have used previously, and feel competent with, either in school or in professional manner at work.
    </p>
    <div class="skills-list-wrapper">
      <div
        v-for="skill in skillsList"
        :key="skill.title"
        class="skills-list"
      >
        <h2 class="small-title">
          {{ skill.title }}
        </h2>
        <ul>
          <li
            v-for="value in skill.values"
            :key="value"
            class="small-paragraph"
          >
            {{ value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Skills',
  data () {
    return {
      skillsList: [
        {
          title: 'Web',
          values: [
            'HTML, CSS & JS',
            'Vue.js',
            'Angular 2',
            'React',
            'PHP',
            'Wordpress',
            'Magento 1 & 2'
          ]
        },
        {
          title: 'Mobile',
          values: [
            'Java (Native Android)',
            'Kotlin (Native Android)',
            'Swift (Native iOS)',
            'Ionic (Hybrid app)'
          ]
        },
        {
          title: 'Design',
          values: [
            'Adobe XD',
            'Figma',
            'Zeplin'
          ]
        },
        {
          title: 'Version control',
          values: [
            'Git',
            'SVN',
            'GitHub',
            'Bitbucket',
            'GitLab'
          ]
        },
        {
          title: 'Depedency & package management',
          values: [
            'NPM',
            'Composer',
            'Yarn',
            'Homebrew',
            'APT'
          ]
        },
        {
          title: 'Project management',
          values: [
            'Scrum',
            'Trello',
            'Jira'
          ]
        },
        {
          title: 'APIs & databases',
          values: [
            'GraphQL',
            'Node.js',
            'Express.js',
            'MySQL / MariaDB',
            'MongoDB',
            'PostgreSQL'
          ]
        },
        {
          title: 'Operating systems',
          values: [
            'Windows',
            'Linux (Ubuntu & Manjaro)',
            'MacOS'
          ]
        },
        {
          title: 'Other',
          values: [
            'Some games with Unity engine & C#',
            'Some dabbling with machine learning'
          ]
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.skills {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

.skills-list-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

.skills-list {
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

  .skills-list-wrapper {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .skills-list {
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
