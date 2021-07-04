<template>
  <div class="wrap">
    <template v-for="list in lists">
      <div :key="list.label + 'label'" class="label">
        <div class="line pre" />
        <div class="text">{{ list.label }}</div>
        <div class="line after" />
      </div>
      <div :key="list.label + 'list'" class="list">
        <div
          v-for="article in list.articles"
          :key="article.id"
          class="item-holder"
        >
          <div class="eye-catch">
            <v-img
              :src="article.imageUrl || 'no-image.svg'"
              width="240"
              height="240"
              class="image"
            />
            <div class="publish">{{ article.publish }}</div>
          </div>
          <div class="article-title">{{ article.title }}</div>
          <div class="tags">
            <v-chip
              v-for="tag in article.tags"
              :key="tag"
              x-small
              class="tag"
              >{{ tag }}</v-chip
            >
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    lists: [],
  }),
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@1,500&family=Teko:wght@600&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&display=swap',
      },
    ],
  },
  mounted() {
    const article = {
      id: 'article-id',
      title: 'TypeScriptの夢を見る',
      tags: ['TypeScript', 'Web', 'test-tag'],
      publish: '2021/06/01',
      imageUrl: undefined,
    };

    this.lists = [
      { label: 'NEW', articles: [article, article, article, article] },
      { label: 'ACCESS TOP', articles: [article, article, article, article] },
    ];
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  padding-top: 4rem;
  .label {
    font-family: 'Teko', sans-serif;
    display: flex;
    margin-bottom: 1rem;

    .text {
      padding: 0 1rem;
    }

    .line {
      border-bottom: 2px dotted black;
      height: 0.7rem;

      &.pre {
        width: 2rem;
      }
      &.after {
        flex-grow: 1;
      }
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;

    .item-holder {
      width: 240px;
      height: 360px;
      margin-right: 2rem;

      .eye-catch {
        position: relative;
        width: 240px;
        height: 240px;

        .image {
          position: absolute;
          top: 0;
          left: 0;
          border: 1px solid black;
        }

        .publish {
          position: absolute;
          top: 220px;
          right: 6px;
          font-family: 'Teko', sans-serif;
          font-size: 0.9rem;
          text-shadow: 1px 1px 1px white, -1px -1px 1px white;
        }
      }

      .tags {
        display: flex;
        flex-wrap: wrap;

        .tag {
          margin-right: 0.3rem;
        }
      }

      .article-title {
        font-family: 'M PLUS Rounded 1c', sans-serif;
        font-weight: bold;
      }
    }
  }
}
</style>
