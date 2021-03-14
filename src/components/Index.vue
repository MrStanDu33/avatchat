<template>
  <div class="index">
    <div class="container">
      <header>
        <div class="logotype"><a href="#">Avatchat</a></div>
        <div class="nav">
          <ul class="nav-menu">
            <li class="nav-menu-list">
              <a href="" id="connectURL">App</a>
            </li>
            <li class="nav-menu-list"><a href="#">Donate</a></li>
            <li class="nav-menu-list">
              <a href="#">Github<span class="gg-arrow-top-right"></span></a>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <h1 class="title">Start interacting with your twitch community.</h1>
        <p class="text">
          Overlay extension to display recent chatter's avatar on your stream.
        </p>
        <div class="button">
          <a href="#" class="cta cta-yellow">Get started</a>
          <a href="#" class="cta cta-blank">Chat interactions example</a>
        </div>
      </main>
    </div>
    <aside></aside>
  </div>
</template>

<style lang="scss">
$backgroundColor: #0e0e0e;
$primaryColor: #faff00;
$secondaryColor: #ededed;
$thirdColor: #bebebe;

*,
::before,
::after {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  background-color: $backgroundColor;
}

@font-face {
  font-family: 'Cereal';
  src: url(../assets/fonts/AirbnbCerealLight.ttf) format(truetype);
  font-weight: 300;
}

@font-face {
  font-family: 'Cereal';
  src: url(../assets/fonts/AirbnbCerealBook.ttf) format(truetype);
  font-weight: 400;
}

@font-face {
  font-family: 'Cereal';
  src: url(../assets/fonts/AirbnbCerealMedium.ttf) format(truetype);
  font-weight: 500;
}

@font-face {
  font-family: 'Cereal';
  src: url(../assets/fonts/AirbnbCerealBold.ttf) format(truetype);
  font-weight: 700;
}

@font-face {
  font-family: 'Cereal';
  src: url(../assets/fonts/AirbnbCerealExtraBold.ttf) format(truetype);
  font-weight: 800;
}

@font-face {
  font-family: 'Cereal';
  src: url(../assets/fonts/AirbnbCerealBlack.ttf) format(truetype);
  font-weight: 900;
}

.hello {
  font-family: 'Cereal', Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: $secondaryColor;
}

.container {
  max-width: 60%;
  padding: 40px 66px;
}

.cta {
  display: block;
  width: max-content;
  padding: 12px 44px;
  border-radius: 4px;
  font-size: 14px;

  &-yellow {
    background-color: $primaryColor;
    color: $backgroundColor;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-15%);
    }
  }

  &-blank {
    color: $thirdColor;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-15%);
      background-color: #121212;
    }
  }
}

header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'logotype nav';

  .logotype {
    grid-area: logotype;
    font-size: 24px;
    font-weight: 700;

    a {
      color: $primaryColor;
    }
  }

  .nav {
    grid-area: nav;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &-menu {
      display: flex;

      &-list {
        color: $secondaryColor;

        &:not(:first-child) {
          margin-left: 28px;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          color: $secondaryColor;
          transition: color 0.3s ease-in-out;

          .gg-arrow-top-right {
            --ggs: 0.7;

            margin-left: 5px;
          }

          &:hover {
            color: $primaryColor;
          }
        }
      }
    }
  }
}

main {
  display: flex;
  flex-direction: column;
  margin-top: 25%;
  transform: translateY(25%);
  max-width: 636px;

  .title {
    font-size: 64px;
    font-weight: 700;
    line-height: 68px;
    margin-bottom: 30px;
  }

  .text {
    font-size: 14px;
    color: $thirdColor;
    margin-bottom: 30px;
  }

  .button {
    display: flex;

    a:not(:first-child) {
      margin-left: 28px;
    }
  }
}

aside {
  position: absolute;
  height: 100vh;
  width: 40%;
  background-color: #1d1d1d;
  top: 0;
  right: 0;
}
</style>
