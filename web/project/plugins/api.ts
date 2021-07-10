export default ($axios, inject) => {
  inject('api', $axios);
};
