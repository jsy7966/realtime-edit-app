var quillInstance = new Quill('#quill-container', {
  theme: 'snow',
  modules: {
    table: true,
    toolbar: {
      container: document.getElementById('toolbar')
    }
  }
})
