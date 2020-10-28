<template>
    <nav class="navbar navbar-expand-lg fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Car Rentals</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Latest Cars</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Financing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Rent My Car
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Rent Car</a></li>
            <li><a class="dropdown-item" href="#">Looking Rental</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Management</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>
<script>
export default {
    name: 'TheNavbar'
}
</script>
<style scoped>
.navbar {
  border: 0;
  height: 85px;
  border-radius: 3px;
  padding: .625rem 0;
  margin-bottom: 20px;
  color: #555;
  background-color: #fff!important;
  box-shadow: 0 4px 18px 0 rgba(0,0,0,.12), 0 7px 10px -5px rgba(0,0,0,.15);
}
.fixed-bottom, .fixed-top {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}
fixed-top{
  top: 0;
}
</style>
