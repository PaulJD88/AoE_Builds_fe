<template>
  <sliding-pagination
    :current="current"
    :total="total"
    @page-change="onPageChange"
  >
  </sliding-pagination>
</template>

<script>
export default {
  name: 'SimpleExample',
  props: {
    ariaPaginationLabel: {
      type: String,
      required: false,
      default: 'Pagination Navigation'
    },
    ariaGotoPageLabel: {
      type: String,
      required: false,
      default: 'Go to page %page% of %total%'
    },
    ariaPreviousPageLabel: {
      type: String,
      required: false,
      default: 'Go to previous page'
    },
    ariaNextPageLabel: {
      type: String,
      required: false,
      default: 'Go to next page'
    },
    ariaCurrentPageLabel: {
      type: String,
      required: false,
      default: 'Page %page% of %total%, current page'
    },
    classMap: {
      type: Object,
      required: false,
      default: () => {}
    },
    current: {
      required: true,
      type: Number
    },
    total: {
      required: true,
      type: Number
    },
    slidingEndingSize: {
      required: false,
      type: Number,
      default: 2
    },
    slidingWindowSize: {
      required: false,
      type: Number,
      default: 3
    },
    nonSlidingSize: {
      required: false,
      type: Number,
      default: 9
    },
    pageComponent: {
      required: false,
      type: String,
      default: 'sliding-pagination-default-page'
    },
    data () {
      return {
        current: 1,
        total: 10
      }
    },
    methods: {
      onPageChange (page) {
        this.current = page
      }
    }
  }
}
</script>
