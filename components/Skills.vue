<template>
  <div class="skills">
    <h1 class="title">Skills 📈</h1>
    <p class="paragraph">
      Listed below are some (not all) technologies, methods and platforms that I
      have used previously, and feel competent working with.
    </p>
    <div class="skills-list-wrapper">
      <div v-for="skill in skillsList" :key="skill.title" class="skills-list">
        <h2 class="small-title">
          {{ skill.title }}
        </h2>
        <ul>
          <li v-for="value in skill.values" :key="value" class="list-item">
            <div class="list-item__content">
              <p class="small-paragraph">
                {{ value }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Skills',
  data() {
    return {
      skillsList: [
        {
          title: 'Web',
          values: [
            'TypeScript',
            'React / Vue / Angular',
            'WordPress',
            'Magento 2',
          ],
        },
        {
          title: 'Backends / APIs',
          values: [
            'Django',
            'Node.js',
            'REST',
            'Express.js',
            'GraphQL',
            'Prisma',
            'NestJS',
          ],
        },
        {
          title: 'Mobile',
          values: [
            'Ionic (Hybrid)',
            'Kotlin (Native Android)',
            'Swift (Native iOS)',
            'Java (Native Android)',
          ],
        },
        {
          title: 'Databases',
          values: ['MySQL / MariaDB', 'PostgreSQL', 'ClickHouse', 'MongoDB'],
        },
        {
          title: 'Testing',
          values: ['Postman', 'BrowserStack', 'Cypress', 'Lighthouse', 'Jest'],
        },
        {
          title: 'Infra',
          values: ['Docker', 'Drone', 'Jenkins', 'Kubernetes', 'Proxmox'],
        },
        {
          title: 'Design',
          values: ['Figma', 'Zeplin', 'Sketch', 'Adobe XD'],
        },
        {
          title: 'VCS & VCS platforms',
          values: ['Git', 'GitHub', 'Bitbucket', 'GitLab', 'Subversion'],
        },
        {
          title: 'Package management',
          values: ['NPM', 'Yarn', 'Homebrew', 'Composer'],
        },
        {
          title: 'Miscellaneous',
          values: ['Superset', 'Zeppelin', 'Apache Airflow', 'Bash scripting'],
        },
        {
          title: 'Operating systems',
          values: ['Windows', 'Linux', 'MacOS'],
        },
      ],
    };
  },
};
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

  .list-item {
    margin-left: 1em;
    list-style-type: disc;
    list-style-position: outside;

    &__content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
}

.title {
  margin-bottom: 1.5rem;
}

.paragraph {
  margin-bottom: 0.75rem;
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
    margin-bottom: 1rem;
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
    flex: 0 1 50%;
    margin-bottom: 1.5rem;

    &:nth-child(odd) {
      padding-right: 2em;
    }
  }
}

@media only screen and (min-width: $breakpoint-small-desktop) {
  .title {
    margin-bottom: 2rem;
  }

  .paragraph {
    margin-bottom: 1.25rem;
  }

  .small-title {
    margin-bottom: 1rem;
  }

  .small-paragraph {
    margin-bottom: 0.75rem;
  }

  .skills-list {
    flex: 0 1 33%;
  }
}
</style>
