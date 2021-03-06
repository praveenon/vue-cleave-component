<template>
  <input :type="type" @input="onInput"/>
</template>

<script type="text/javascript">
  import Cleave from 'cleave.js'

  export default {
    name: 'cleave',
    props: {
      value: {
        default: null,
        required: true,
        validator(value) {
          return value === null || typeof value === 'string' || value instanceof String || typeof value === 'number'
        }
      },
      options: {
        type: Object,
        default: () => ({})
    },
    // Set this prop to false to emit masked value
    raw: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      // cleave.js instance
      cleave: null,
      temp: null
    }
  },
  mounted() {
    /* istanbul ignore if */
    if (this.cleave) return;

    this.cleave = new Cleave(this.$el, this.options);
    this.cleave.setRawValue(this.value)
  },
  methods: {
    /**
     * Watch for value changed by cleave and notify parent component
     * Note: we have to wait for DOM to get updated by cleave.js in order to get final value
     *
     * @param event
     */
    onInput(event) {
      this.$nextTick(() => {
        this.temp = event.target.value;
      this.$emit('input', this.temp);
    })
    },
  },
  watch: {
    /**
     * Watch for any changes in options and redraw
     *
     * @param newOptions Object
     */
    options: {
      deep: true,
        handler(newOptions) {
        this.cleave.destroy();
        this.cleave = new Cleave(this.$el, newOptions);
        this.cleave.setRawValue(this.temp)
      }
    },

    /**
     * Watch for changes from parent component and notify cleave instance
     *
     * @param newValue
     */
    value(newValue) {
    this.cleave && this.cleave.setRawValue(this.temp);
    }
  },
  beforeDestroy() {
    // Free up memory
    /* istanbul ignore else */
    if (this.cleave) {
      this.cleave.destroy();
      this.cleave = null
    }
  },
  }
</script>
