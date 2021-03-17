<template>
  <div class="hello">
    <div class="container">
      <header>
        <div class="logotype"><a href="#">Avatchat</a></div>
        <div class="nav">
          <button id="menuBtn" class="nav-button"><span class="gg-more-alt"></span></button>
          <ul id="menu" class="nav-menu">
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
        <p class="text">Overlay extension to display recent chatter's avatar on your stream.</p>
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
$color-citrus: #faff00;
$color-black: #0e0e0e;
$color-coal: #1d1d1d;
$color-gray: #242424;
$color-moon: #505050;
$color-silver: #bebebe;
$color-snow: #ededed;
$color-warning: #d33e3e;
$backgroundGray: #121212;

@import url("https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");

*,
::before,
::after {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  background-color: $color-black;
}

.hello {
  font-family: "Archivo", Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: $color-snow;
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
    background-color: $color-citrus;
    color: $color-black;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-15%);
    }
  }

  &-blank {
    color: $color-silver;
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
  grid-template-areas: "logotype nav";

  .logotype {
    grid-area: logotype;
    font-size: 24px;
    font-weight: 700;

    a {
      color: $color-citrus;
    }
  }

  .nav {
    grid-area: nav;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &-button {
      display: none;
    }

    &-menu {
      display: flex;

      &-list {
        color: $color-snow;

        &:not(:first-child) {
          margin-left: 28px;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
          color: $color-snow;
          transition: color 0.3s ease-in-out;

          .gg-arrow-top-right {
            --ggs: 0.7;

            margin-left: 5px;
          }

          &:hover {
            color: $color-citrus;
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
    color: $color-silver;
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

@media screen and (max-width: 950px) {
  .container {
    max-width: 100%;
    padding: 24px;
  }

  .apear {
    display: flex !important;
  }

  header {
    .nav {
      &-button {
        cursor: pointer;
        transform: translateY(-5px);
        background-color: transparent;
        border: none;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $color-silver;
        height: 40px;
        width: 40px;
        transition: color 0.3s ease-in-out;

        &:hover {
          color: $color-citrus;
        }
      }

      &-menu {
        display: none;
        position: absolute;
        align-items: flex-end;
        flex-direction: column;
        right: 34px;
        top: 80px;

        &-list {
          margin-bottom: 16px;

          &:not(:first-child) {
            margin-left: 0;
          }
        }
      }
    }
  }

  main {
    padding-right: 24px;

    .title {
      font-size: 30px;
      line-height: 34px;
    }

    .button {
      flex-direction: column;

      a:not(:first-child) {
        margin-top: 24px;
        margin-left: 0;
      }

      .cta {
        width: 100%;
        max-width: 400px;
        text-align: center;
      }
    }
  }

  aside {
    position: relative;
    width: 100%;
    margin-top: 30vh;
  }
}
</style>
