<template>
  <div class="container-fluid sticky-top">
    <div class="sidebar sticky-top">
      <div class="header sticky-top">

        <div class="list-logo ">
          <a href="#">
            <img src="../src/assets/img/logo.png" alt="" class="logo">
          </a>
        </div>
        <div class="main sticky-top">
          <br>
          <p>Menu</p>
          <div class="list-item">
            <a href="#">
              <img src="../src/assets/img/table-cells-large-solid.svg" alt="" class="icon">
              <router-link to="/"><span class="description-header">Overview</span></router-link>
            </a>
          </div>
          <div class="list-item">
            <a href="#">
              <img src="../src/assets/img/window-maximize-regular.svg" alt="" class="icon">
              <router-link to="/"><span class="description-header">Kegiatan</span></router-link>
            </a>
          </div>
          <div class="list-item">
            <a href="#">
              <img src="../src/assets/img/circle-dollar-to-slot-solid.svg" alt="" class="icon">
              <router-link to="/"><span class="description-header">fudding</span></router-link>
            </a>
          </div>

          <div class="list-item ">
            <a href="#">
              <img src="../src/assets/img/user-group-solid.svg" alt="" class="icon">
              <router-link to="/"><span class="description-header">Pengguna</span></router-link>
            </a>
          </div>
          <div class="list-item">
            <a href="#">
              <img src="../src/assets/img/message-solid.svg" alt="" class="icon">
              <router-link to="/"><span class="description-header">Pesan</span></router-link>
            </a>
          </div>
        </div>

        <div class="navbar main-profil fixed-bottom">
          <p>Profil</p>
          <div class="list-profil">
            <a href="">
              <img src="../src/assets/img/circle-user-solid.svg" alt="" class="iconuser">
              <span class="description-header">Admin <br>admin@gmail</span>


            </a>
          </div>
          <div class="list-logout">
            <a href="">
              <img src="../src/assets/img/logout.svg" alt="" class="iconlogout">
              <span class="description-header">Log Out</span>


            </a>
          </div>
        </div>

      </div>
    </div>

    <div class="main-content ">

      <div class="menu-content ">
        <router-view />
      </div>

    </div>
  </div>





</template>

<style>
@import url("https://fonts.googleapis.com");
@import url("https://fonts.gstatic.com");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap");

* {
  font-family: 'Inter';
  padding: 0;
  margin: 0;
}

.container-fluid {
  display: flex;
  min-height: 100vh;
}

/* awal sidebar */
.sidebar {

  background-color: #FFFFFF;
  width: 244px;
  padding: 24px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;

}

.sidebar .description-header {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #181A1B;
}

.sidebar a {
  text-decoration: none;
}



.sidebar .header .main .list-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 8px;
  width: 196px;
  height: 48px;
  border-radius: 4px;
  box-sizing: border-box;
  transition: all ease-in .2s
}

.sidebar .header .main .list-item:hover {
  background: #E4F0F6;
  transition: all ease-in .2s
}

.sidebar .header .main .list-item .icon {
  height: 17px;
  width: 17px;
  margin-right: 11.5px;
}

/* profil */
.sidebar .header .main-profil {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  margin-left: 24px;

}

.sidebar .header .main-profil .list-profil {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 196px;
  height: 50px;
  box-sizing: border-box;
  transition: all ease-in .2s
}

.sidebar .header .main-profil .list-profil:hover {
  background: #E4F0F6;
  transition: all ease-in .2s
}



.sidebar .header .main-profil .list-profil .iconuser {
  height: 24px;
  width: 24px;
  margin-right: 16px;
  margin-left: 8px;
}

/* log out */
.sidebar .header .main-profil .list-logout {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  gap: 4px;
  width: 196px;
  height: 36px;
  background: #FFE8E9;
  border-radius: 4px;
  margin-bottom: 24px;
  transition: all ease-in .2s
}

.sidebar .header .main-profil .list-logout:hover {
  background: red;
  transition: all ease-in .2s
}

.sidebar .header .main-profil .list-logout .iconlogout {
  height: 16.42px;
  width: 17.5px;
  margin-right: 11.98px;

}

/* end sidebar */




/* conten */
.main-content {
  background-color: #EEEEEE;
  flex-grow: 1;

}

/* end conten */
</style>
