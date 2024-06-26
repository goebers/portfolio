<template>
  <div class="about">
    <div class="picture-wrapper">
      <img
        class="picture"
        src="~/public/img/me.jpg"
        alt="CV picture"
        width="500"
        height="500"
      />
    </div>
    <div class="desc-wrapper">
      <h1 class="title">About me 👋</h1>
      <p class="paragraph">
        Hi, I'm Robert, a {{ getAge }} year old fullstack web developer from
        Vantaa, Finland. I currently work at
        <a
          class="link"
          href="https://www.giosg.com/"
          target="_blank"
          rel="noreferrer"
          >giosg</a
        >
        and have been working in the industry since 2016.
      </p>
      <p class="paragraph">
        I finished my Bachelor of Engineering degree in Information and
        Communications Technology at
        <a
          class="link"
          href="https://www.metropolia.fi/fi"
          target="_blank"
          rel="noreferrer"
          >Metropolia University of Applied Sciences</a
        >
        in the spring of 2021.
      </p>
      <p class="paragraph">
        My previous education is from
        <a
          class="link"
          href="https://www.keuda.fi/"
          target="_blank"
          rel="noreferrer"
          >Keuda vocational school</a
        >, where I studied information and communication technology with primary
        focus in software production.
      </p>
      <p class="paragraph">
        In my spare time, I like to stay active, spend time with my friends and
        family, and constantly try to learn new things. Currently I'm passionate
        about running, golf & renovating my apartment. I'm also part of a
        theater group where we do short plays.
      </p>
      <p class="paragraph">
        There are three things I value at work above all: supportive atmosphere,
        smooth team work and room to grow. Currently I am well-versed in all
        areas of web development and am starting to look into other things that
        I can learn to further support my knowledge. If you want to check out my
        full work history, it's available on my
        <a
          class="link"
          href="https://www.linkedin.com/in/robert-laitila-09307610b/"
          target="_blank"
          rel="noreferrer"
          >LinkedIn profile</a
        >.
      </p>
    </div>
  </div>
</template>
<script>
import { differenceInYears } from 'date-fns';

export default {
  name: 'About',
  computed: {
    getAge() {
      const bDay = new Date('1997-02-04');

      return differenceInYears(new Date(), bDay);
    },
  },
};
</script>
<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

.picture-wrapper,
.desc-wrapper {
  flex: 0 0 100%;
}

.picture-wrapper {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.picture {
  max-width: 100%;
  height: auto;
  width: auto;
  object-fit: cover;
  opacity: 0.85;
  transition: 300ms;

  &:hover {
    opacity: 1;
  }
}

.desc-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    margin-bottom: 1.5rem;
  }

  .paragraph {
    margin-bottom: 0.75rem;
  }
}

@media only screen and (min-width: $breakpoint-large-mobile) {
  .desc-wrapper {
    .title {
      margin-bottom: 1.75rem;
    }

    .paragraph {
      margin-bottom: 1rem;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}

@media only screen and (min-width: $breakpoint-small-desktop) {
  .about {
    flex-direction: row;
  }

  .picture-wrapper,
  .desc-wrapper {
    flex: 0 1 50%;
  }

  .picture-wrapper {
    justify-content: flex-start;
    margin: 1em 2em 0 1em;
  }

  .picture {
    position: sticky;
    align-self: flex-start;
    top: 1.5rem;
  }

  .desc-wrapper {
    .title {
      margin-bottom: 2rem;
    }

    .paragraph {
      margin-bottom: 1.25rem;
    }
  }
}
</style>
