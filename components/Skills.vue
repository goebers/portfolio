<template>
  <div class="skills">
    <h1 class="title">
      Skills 📈
    </h1>
    <p class="paragraph">
      Listed below are some technologies, methods and platforms that I have used previously, and feel competent working with rated on a scale of 1-5.
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
            class="list-item"
          >
            <div class="list-item__content">
              <p class="small-paragraph">
                {{ value.skill }}
              </p>
              <div class="rating">
                <p
                  v-for="n in parseInt(value.rating)"
                  :key="n"
                  class="small-paragraph"
                >
                  ⭐
                </p>
              </div>
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
  data () {
    return {
      // Skill rating on a scale of 1-5
      skillsList: [
        {
          title: 'Web',
          values: [
            {
              skill: 'HTML, CSS & JS',
              rating: 5
            },
            {
              skill: 'Vue.js',
              rating: 5
            },
            {
              skill: 'React',
              rating: 4
            },
            {
              skill: 'Angular 2',
              rating: 3
            },
            {
              skill: 'PHP',
              rating: 3
            },
            {
              skill: 'Wordpress',
              rating: 3
            },
            {
              skill: 'Magento 1 & 2',
              rating: 3
            }
          ]
        },
        {
          title: 'Mobile',
          values: [
            {
              skill: 'Ionic (Hybrid)',
              rating: 4
            },
            {
              skill: 'Kotlin (Native Android)',
              rating: 3
            },
            {
              skill: 'Swift (Native iOS)',
              rating: 3
            },
            {
              skill: 'Java (Native Android)',
              rating: 2
            }
          ]
        },
        {
          title: 'Design',
          values: [
            {
              skill: 'Adobe XD',
              rating: 3
            },
            {
              skill: 'Figma',
              rating: 2
            },
            {
              skill: 'Zeplin',
              rating: 2
            }
          ]
        },
        {
          title: 'VCS & VCS platforms',
          values: [
            {
              skill: 'Git',
              rating: 5
            },
            {
              skill: 'GitHub',
              rating: 5
            },
            {
              skill: 'Bitbucket',
              rating: 5
            },
            {
              skill: 'GitLab',
              rating: 3
            },
            {
              skill: 'SVN',
              rating: 2
            }
          ]
        },
        {
          title: 'Package management',
          values: [
            {
              skill: 'NPM',
              rating: 5
            },
            {
              skill: 'Composer',
              rating: 3
            },
            {
              skill: 'Homebrew',
              rating: 3
            },
            {
              skill: 'APT',
              rating: 3
            },
            {
              skill: 'Yarn',
              rating: 2
            }
          ]
        },
        {
          title: 'Project management',
          values: [
            {
              skill: 'Scrum',
              rating: 5
            },
            {
              skill: 'Trello',
              rating: 5
            },
            {
              skill: 'Jira',
              rating: 4
            },
            {
              skill: 'Confluence',
              rating: 3
            }
          ]
        },
        {
          title: 'JS frameworks / APIs',
          values: [
            {
              skill: 'Node.js',
              rating: 5
            },
            {
              skill: 'GraphQL',
              rating: 4
            },
            {
              skill: 'Express.js',
              rating: 4
            },
            {
              skill: 'NestJS',
              rating: 3
            },
            {
              skill: 'Prisma',
              rating: 3
            }
          ]
        },
        {
          title: 'Databases',
          values: [
            {
              skill: 'MySQL / MariaDB',
              rating: 4
            },
            {
              skill: 'MongoDB',
              rating: 3
            },
            {
              skill: 'PostgreSQL',
              rating: 3
            }
          ]
        },
        {
          title: 'Testing',
          values: [
            {
              skill: 'Postman',
              rating: 5
            },
            {
              skill: 'BrowserStack',
              rating: 5
            },
            {
              skill: 'Lighthouse',
              rating: 4
            }
          ]
        },
        {
          title: 'Code editors / IDEs',
          values: [
            {
              skill: 'Visual Studio Code',
              rating: 5
            },
            {
              skill: 'PhpStorm',
              rating: 5
            },
            {
              skill: 'Xcode',
              rating: 3
            },
            {
              skill: 'Android Studio',
              rating: 3
            },
            {
              skill: 'Eclipse',
              rating: 2
            }
          ]
        },
        {
          title: 'Operating systems',
          values: [
            {
              skill: 'Windows',
              rating: 5
            },
            {
              skill: 'Linux',
              rating: 4
            },
            {
              skill: 'MacOS',
              rating: 4
            }
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

  .list-item {
    margin-left: 1em;
    list-style-type: disc;
    list-style-position: outside;

    &__content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .rating {
      display: flex;
      flex-direction: row;
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
}
</style>
