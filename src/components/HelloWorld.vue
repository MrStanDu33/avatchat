<template>
  <div class="hello">
    <header>
      <div class="logotype"><a href="#">Ac</a></div>
      <div class="account">Accounts Name</div>
      <div class="nav">
        <button class="nav-account cta cta-gray">My account</button>
      </div>
    </header>

    <div class="container">
      <aside>
        <div class="bloc">
          <div class="bloc-header">
            <h2 class="bloc-header-title">Projects</h2>
            <button class="bloc-header-add">
              <span class="gg-math-plus"></span>
            </button>
          </div>
          <div class="bloc-menu">
            <div class="bloc-menu-list">
              <div class="bloc-menu-list-text">Overlay Name</div>
              <button class="bloc-menu-list-more">
                <span class="gg-more-alt"></span>
              </button>
            </div>
            <div class="bloc-menu-list">
              <div class="bloc-menu-list-text">New overlay</div>
              <button class="bloc-menu-list-more">
                <span class="gg-more-alt"></span>
              </button>
            </div>
            <div class="bloc-menu-list">
              <div class="bloc-menu-list-text">Project #1</div>
              <button class="bloc-menu-list-more">
                <span class="gg-more-alt"></span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      <main>
        <div class="title">My projects</div>
        <div class="bloc">
          <button class="bloc-card">
            <div class="bloc-card-more"><span class="gg-more-alt"></span></div>
            <div class="bloc-card-preview">O</div>
            <div class="bloc-card-title">Overlay Name</div>
          </button>
          <button class="bloc-card">
            <div class="bloc-card-more"><span class="gg-more-alt"></span></div>
            <div class="bloc-card-preview">N</div>
            <div class="bloc-card-title">New overlay</div>
          </button>
          <button class="bloc-card">
            <div class="bloc-card-more"><span class="gg-more-alt"></span></div>
            <div class="bloc-card-preview">P</div>
            <div class="bloc-card-title">Project #1</div>
          </button>
          <button class="bloc-card">
            <div class="bloc-card-more"><span class="gg-more-alt"></span></div>
            <div class="bloc-card-preview">+</div>
            <div class="bloc-card-title">Create new overlay</div>
          </button>
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
$backgroundColor: #0e0e0e;
$backgroundGray: #121212;
$primaryColor: #faff00;
$secondaryColor: #ededed;
$thirdColor: #bebebe;
$ctaGray: #1d1d1d;
$ctaGrayHover: #242424;

*,
::before,
::after {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}

body {
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
  display: flex;
}

header {
  display: grid;
  padding: 34px 66px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'logotype account nav';
  background-color: $backgroundGray;

  .logotype {
    grid-area: logotype;
    font-size: 24px;
    font-weight: 700;

    a {
      color: $primaryColor;
    }
  }

  .account {
    grid-area: account;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }

  .nav {
    grid-area: nav;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}

aside {
  background-color: $ctaGray;
  width: max-content;
  min-width: 250px;
  height: calc(100vh - 100px);

  .bloc {
    display: flex;
    flex-direction: column;

    &-header {
      padding: 30px 24px;
      display: grid;
      grid-template-columns: 1fr 4fr;
      grid-template-areas: 'text icon';
      border-bottom: 1px solid $ctaGrayHover;

      &-title {
        grid-area: text;
        font-size: 14px;
        font-weight: 500;
      }

      &-add {
        display: flex;
        align-items: center;
        justify-self: flex-end;
        cursor: pointer;
        grid-area: icon;
        border: 0;
        outline: 0;
        background-color: inherit;
        color: $thirdColor;
        transition: all 0.3s ease-in-out;

        &:hover {
          color: $primaryColor;
        }
      }
    }

    &-menu {
      display: flex;
      flex-direction: column;
      margin-top: 22px;
      color: $thirdColor;

      &-list {
        padding: 10px 24px;
        display: grid;
        grid-template-columns: 9fr 1fr;
        grid-template-areas: 'text more';
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: $ctaGrayHover;
        }

        &-text {
          grid-area: text;
          font-size: 14px;
          font-weight: 500;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 214px;
          transition: all 0.3s ease-in-out;
        }

        &:hover > .bloc-menu-list-text {
          color: $secondaryColor;
        }

        &-more {
          display: flex;
          align-items: center;
          justify-self: flex-end;
          cursor: pointer;
          grid-area: more;
          border: 0;
          outline: 0;
          background-color: inherit;
          color: $secondaryColor;
          width: 24px;
          padding: 4px;

          .gg-more-alt {
            margin-left: 50%;
            transform: translateX(-50%);
            color: $thirdColor;
            transition: all 0.3s ease-in-out;
          }

          &:hover > .gg-more-alt {
            color: $primaryColor;
          }
        }
      }
    }
  }
}

main {
  padding: 30px 60px;
  overflow-y: auto;
  height: calc(100vh - 100px);

  .title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 28px;
  }

  .bloc {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;

    &-card {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      outline: none;
      background-color: inherit;
      cursor: pointer;
      border: 3px solid $ctaGray;
      border-radius: 4px;
      padding: 2rem 6rem;
      height: max-content;
      width: max-content;
      color: $ctaGray;
      margin-right: 24px;
      margin-bottom: 24px;
      transition: all 0.3s ease-in-out;

      &:hover {
        filter: brightness(200%);
        transform: scale(1.1);
      }

      &-more {
        position: absolute;
        top: 8px;
        right: 8px;
        transition: all 0.3s ease-in-out;
        height: 24px;
        width: 32px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          color: $thirdColor;
          background-color: $backgroundGray;
        }
      }

      &-preview {
        font-size: 8rem;
        line-height: 150px;
      }

      &-title {
        color: $thirdColor;
      }
    }
  }
}

.cta {
  display: block;
  width: max-content;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 14px;

  &-yellow {
    padding: 12px 44px;
    background-color: $primaryColor;
    color: $backgroundColor;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-15%);
    }
  }

  &-gray {
    padding: 8px 18px;
    background-color: $ctaGray;
    color: $thirdColor;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: $secondaryColor;
      background-color: $ctaGrayHover;
    }
  }

  &-blank {
    padding: 12px 44px;
    color: $thirdColor;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-15%);
      background-color: #121212;
    }
  }
}
</style>
