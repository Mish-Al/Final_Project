<template>
    <div >
      <div
        class="animate__animated animate__animated animate__zoomIn animate__delay-1s 1s"
      >
        <h1 class="mt-2">Contact</h1>
      </div>
    </div>
  
    <br />
    <div class="container">
      <div class="row">
        <div class="col">
          <div
            class="form animate__animated animate__animated animate__fadeInDown animate__delay-2s 2s"
          >
            <form
              class="p-5"
              action="https://formspree.io/f/xqkonyvj"
              method="POST"
            >
              <div>
                <label for="exampleFormControlInput1" class="form-label"
                  >First Name
                </label>
                <input
                  name="firstname"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  oninvalid="this.setCustomValidity('Input Name')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
              <div>
                <label for="exampleFormControlInput1" class="form-label"
                  >Surname</label
                >
                <input
                  name="surname"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  oninvalid="this.setCustomValidity('Input Surname')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
              <div>
                <label for="exampleFormControlInput1" class="form-label"
                  >Email Address</label
                >
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  required
                  oninvalid="this.setCustomValidity('Input Email')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
              <label for="exampleFormControlTextarea1" class="form-label"
                >Comment or Message</label
              >
              <textarea
                name="message"
                class="form-control text-center"
                id="exampleFormControlTextarea1"
                rows="4"
              ></textarea>
              <br />
              <div class="middle d-flex justify-content-center">
                <button type="submit" class="btn">Submit</button>
                <button type="reset" class="btn">Clear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .btn {
    background-color: #212529;
  border: 2px ridge #495057;
  color: #E9ECEF;
  margin: 4px;
  /* width: 4rem; */
  }
  .btn:hover {
    background-color: #CED4DA;
  color: #495057;
  border: 2px ridge #E9ECEF;
  }
  .container {
    text-align: center;
  }
  .form {
    background-color: #495057;
    color: #e9ecef;
    border: 3px solid #F8F9FA;
    border-radius: 20px;
    margin-bottom: 1rem;
    cursor: pointer;
  }
 
  .col {
    border-radius: 20px;
    margin-bottom: 1rem;
   
  }
  
  
  #exampleFormControlInput1 {
    text-align: center;
  }
  
  h1 {
    text-decoration: underline;
    color: #6C757D;
  }
  
  
  </style>