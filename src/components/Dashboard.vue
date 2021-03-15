<template>
  <div class="hello">
    <div class="add" id="add">
      <div class="add-bloc">
        <h1 class="add-bloc-title">Add a new overlay</h1>
        <input
          class="add-bloc-input"
          type="text"
          id="name"
          name="name"
          value="Project name"
          required
        />
        <div class="add-bloc-button">
          <a href="#" class="cta cta-yellow">Create</a>
          <a href="#" class="cta cta-blank" onclick="divVisibility('add');">Cancel</a>
        </div>
      </div>
    </div>
    <div class="rename" id="rename">
      <div class="rename-bloc">
        <h1 class="rename-bloc-title">Change the name of this project</h1>
        <input
          class="rename-bloc-input"
          type="text"
          id="name"
          name="name"
          value="Project name"
          required
        />
        <div class="rename-bloc-button">
          <a href="#" class="cta cta-yellow">Rename this project</a>
          <a href="#" class="cta cta-blank" onclick="divVisibility('rename');">Cancel</a>
        </div>
      </div>
    </div>
    <div class="delete" id="delete">
      <div class="delete-bloc">
        <h1 class="delete-bloc-title">This action can not be undone, are you sure ?</h1>
        <div class="delete-bloc-button">
          <a href="#" class="cta cta-red">Delete</a>
          <a href="#" class="cta cta-blank" onclick="divVisibility('delete');">Cancel</a>
        </div>
      </div>
    </div>
    <div class="link" id="link">
      <div class="link-bloc">
        <h1 class="link-bloc-title">
          Copy this <span class="link-bloc-title-yellow">private</span> link in your broadcaster.
        </h1>
        <div class="link-bloc-button">
          <input
            class="link-bloc-input"
            type="password"
            id="linkURL"
            name="link"
            value="gp762nuuoqcoxypju8c569th9wz7q5"
            readonly
          />
          <a href="#" class="cta cta-yellow">Copy</a>
          <a href="#" class="cta cta-blank" onclick="divVisibility('link');">Cancel</a>
        </div>
        <div class="link-bloc-subtitle">
          Please do not share this link with anyone and do not show this link during a stream!
          Neither avatchat nor admins will ask this information.
        </div>
      </div>
    </div>

    <header>
      <div class="logotype"><a href="#">Ac</a></div>
      <div class="account">BastiUI</div>
      <div class="nav">
        <button
          class="nav-account cta cta-gray"
          id="account"
          onclick="divVisibility('accountBloc');"
        >
          My account
        </button>
        <div class="nav-bloc" id="accountBloc">
          <button class="nav-bloc-input" id="logout">Disconnect</button>
          <div class="nav-bloc-option">Danger zone</div>
          <button
            class="nav-bloc-input nav-bloc-input-red"
            id="revokeURL"
            onclick="divVisibility('delete');"
          >
            Revoke all widgets URLs
          </button>
          <button
            class="nav-bloc-input nav-bloc-input-red"
            id="deleteAccount"
            onclick="divVisibility('delete');"
          >
            Delete your account
          </button>
        </div>
      </div>
    </header>

    <div class="container">
      <aside>
        <div class="bloc">
          <div class="bloc-header">
            <h2 class="bloc-header-title">Projects</h2>
            <button class="bloc-header-add" onclick="divVisibility('add');">
              <span class="gg-math-plus"></span>
            </button>
          </div>
          <div class="bloc-menu">
            <div class="bloc-menu-list">
              <div class="bloc-menu-list-text">Overlay pictures chat</div>
              <button class="bloc-menu-list-more" onclick="divVisibility('overlayOptions1');">
                <span class="gg-more-alt"></span>
              </button>
              <div class="bloc-menu-list-more-bloc" id="overlayOptions1">
                <button class="bloc-menu-list-more-bloc-input">Edit</button>
                <button class="bloc-menu-list-more-bloc-input" onclick="divVisibility('link')">
                  Copy Private link
                </button>
                <button class="bloc-menu-list-more-bloc-input" onclick="divVisibility('rename');">
                  Rename
                </button>
                <button
                  class="bloc-menu-list-more-bloc-input bloc-menu-list-more-bloc-input-red"
                  onclick="divVisibility('delete');"
                >
                  Delete
                </button>
              </div>
            </div>
            <div class="bloc-menu-list">
              <div class="bloc-menu-list-text">Chatbox</div>
              <button class="bloc-menu-list-more" onclick="divVisibility('overlayOptions2');">
                <span class="gg-more-alt"></span>
              </button>
              <div class="bloc-menu-list-more-bloc" id="overlayOptions2">
                <button class="bloc-menu-list-more-bloc-input">Edit</button>
                <button class="bloc-menu-list-more-bloc-input" onclick="divVisibility('link')">
                  Copy Private link
                </button>
                <button class="bloc-menu-list-more-bloc-input" onclick="divVisibility('rename');">
                  Rename
                </button>
                <button
                  class="bloc-menu-list-more-bloc-input bloc-menu-list-more-bloc-input-red"
                  onclick="divVisibility('delete');"
                >
                  Delete
                </button>
              </div>
            </div>
            <div class="bloc-menu-list">
              <div class="bloc-menu-list-text">Test</div>
              <button class="bloc-menu-list-more" onclick="divVisibility('overlayOptions3');">
                <span class="gg-more-alt"></span>
              </button>
              <div class="bloc-menu-list-more-bloc" id="overlayOptions3">
                <button class="bloc-menu-list-more-bloc-input">Edit</button>
                <button class="bloc-menu-list-more-bloc-input" onclick="divVisibility('link')">
                  Copy Private link
                </button>
                <button class="bloc-menu-list-more-bloc-input" onclick="divVisibility('rename');">
                  Rename
                </button>
                <button
                  class="bloc-menu-list-more-bloc-input bloc-menu-list-more-bloc-input-red"
                  onclick="divVisibility('delete');"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main>
        <div class="title">My projects</div>
        <div class="bloc">
          <button class="bloc-card">
            <div class="bloc-card-more" onclick="divVisibility('overlayOptions4');">
              <span class="gg-more-alt"></span>
            </div>
            <div class="bloc-card-preview">O</div>
            <div class="bloc-card-title">Overlay pictures chat</div>
            <div class="bloc-card-bloc" id="overlayOptions4">
              <button class="bloc-card-bloc-input">Edit</button>
              <button class="bloc-card-bloc-input" onclick="divVisibility('link')">
                Copy Private link
              </button>
              <button class="bloc-card-bloc-input" onclick="divVisibility('rename');">
                Rename
              </button>
              <button
                class="bloc-card-bloc-input bloc-card-bloc-input-red"
                onclick="divVisibility('delete');"
              >
                Delete
              </button>
            </div>
          </button>
          <button class="bloc-card">
            <div class="bloc-card-more" onclick="divVisibility('overlayOptions5');">
              <span class="gg-more-alt"></span>
            </div>
            <div class="bloc-card-preview">C</div>
            <div class="bloc-card-title">Chatbox</div>
            <div class="bloc-card-bloc" id="overlayOptions5">
              <button class="bloc-card-bloc-input">Edit</button>
              <button class="bloc-card-bloc-input" onclick="divVisibility('link')">
                Copy Private link
              </button>
              <button class="bloc-card-bloc-input" onclick="divVisibility('rename');">
                Rename
              </button>
              <button
                class="bloc-card-bloc-input bloc-card-bloc-input-red"
                onclick="divVisibility('delete');"
              >
                Delete
              </button>
            </div>
          </button>
          <button class="bloc-card">
            <div class="bloc-card-more" onclick="divVisibility('overlayOptions6');">
              <span class="gg-more-alt"></span>
            </div>
            <div class="bloc-card-preview">T</div>
            <div class="bloc-card-title">Test</div>
            <div class="bloc-card-bloc" id="overlayOptions6">
              <button class="bloc-card-bloc-input">Edit</button>
              <button class="bloc-card-bloc-input" onclick="divVisibility('link')">
                Copy Private link
              </button>
              <button class="bloc-card-bloc-input" onclick="divVisibility('rename');">
                Rename
              </button>
              <button
                class="bloc-card-bloc-input bloc-card-bloc-input-red"
                onclick="divVisibility('delete');"
              >
                Delete
              </button>
            </div>
          </button>
          <button class="bloc-card" onclick="divVisibility('add');">
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
$red: #d33e3e;
$fontspath: "~@/assets/fonts/";

*,
::before,
::after {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: $ctaGray;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: $ctaGrayHover;
}

body {
  background-color: $backgroundColor;
}

button {
  font-family: Cereal, Arial, Helvetica, sans-serif;
}

@font-face {
  font-family: Cereal;
  src: url($fontspath + "AirbnbCerealLight300.ttf") format("truetype");
  font-weight: 300;
}

@font-face {
  font-family: Cereal;
  src: url($fontspath + "AirbnbCerealBook400.ttf") format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: Cereal;
  src: url($fontspath + "AirbnbCerealMedium500.ttf") format("truetype");
  font-weight: 500;
}

@font-face {
  font-family: Cereal;
  src: url($fontspath + "AirbnbCerealBold700.ttf") format("truetype");
  font-weight: 700;
}

@font-face {
  font-family: Cereal;
  src: url($fontspath + "AirbnbCerealExtraBold800.ttf") format("truetype");
  font-weight: 800;
}

@font-face {
  font-family: Cereal;
  src: url($fontspath + "AirbnbCerealBlack900.ttf") format("truetype");
  font-weight: 900;
}

.hello {
  font-family: Cereal, Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: $secondaryColor;
}

.add {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 10;
  display: none;
  justify-content: center;

  &-bloc {
    display: flex;
    flex-direction: column;
    margin-top: 25vh;

    &-title {
      font-size: 64px;
      font-weight: 700;
      max-width: 636px;
      margin-bottom: 30px;
    }

    &-input {
      outline: none;
      background-color: transparent;
      margin-bottom: 30px;
      padding: 16px 16px;
      color: $secondaryColor;
      font-size: 16px;
      border-radius: 4px;
      border: 2px solid $thirdColor;
    }

    &-button {
      display: flex;

      :not(:first-child) {
        margin-left: 28px;
      }
    }
  }
}

.rename {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 10;
  display: none;
  justify-content: center;

  &-bloc {
    display: flex;
    flex-direction: column;
    margin-top: 25vh;

    &-title {
      font-size: 64px;
      font-weight: 700;
      max-width: 636px;
      margin-bottom: 30px;
    }

    &-input {
      outline: none;
      background-color: transparent;
      margin-bottom: 30px;
      padding: 16px 16px;
      color: $secondaryColor;
      font-size: 16px;
      border-radius: 4px;
      border: 2px solid $thirdColor;
    }

    &-button {
      display: flex;

      :not(:first-child) {
        margin-left: 28px;
      }
    }
  }
}

.delete {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 10;
  display: none;
  justify-content: center;

  &-bloc {
    display: flex;
    flex-direction: column;
    margin-top: 25vh;

    &-title {
      font-size: 64px;
      font-weight: 700;
      max-width: 636px;
      margin-bottom: 30px;
    }

    &-button {
      display: flex;

      :not(:first-child) {
        margin-left: 28px;
      }
    }
  }
}

.link {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 10;
  display: none;
  justify-content: center;

  &-bloc {
    display: flex;
    flex-direction: column;
    margin-top: 25vh;

    &-title {
      font-size: 64px;
      font-weight: 700;
      max-width: 700px;
      margin-bottom: 30px;

      &-yellow {
        color: $primaryColor;
      }
    }

    &-input {
      outline: none;
      background-color: transparent;
      padding: 10px 16px;
      color: $secondaryColor;
      font-size: 16px;
      border-radius: 4px;
      border: 2px solid $thirdColor;
      min-width: 350px;
    }

    &-button {
      display: flex;
      margin-bottom: 30px;

      :not(:first-child) {
        margin-left: 28px;
      }
    }

    &-subtitle {
      max-width: 545px;
      color: $thirdColor;
      font-size: 14px;
      font-weight: 300;
    }
  }
}

.container {
  display: flex;
}

header {
  display: grid;
  padding: 34px 66px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "logotype account nav";
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

    &-bloc {
      z-index: 1;
      position: absolute;
      top: 75px;
      display: none;
      flex-direction: column;
      background-color: $ctaGray;
      padding-top: 8px;
      padding-bottom: 8px;
      border-radius: 4px;
      font-size: 14px;

      &-option {
        padding: 8px 18px;
        font-size: 12px;
        color: $red;
        overflow: hidden;

        &::after {
          content: "";
          display: inline-block;
          height: 0.5em;
          vertical-align: bottom;
          width: calc(100% - 79px);
          margin-right: -100%;
          margin-left: 10px;
          border-top: 1px solid $red;
        }
      }

      &-input {
        display: flex;
        justify-content: flex-start;
        cursor: pointer;
        width: 100%;
        border: 0;
        outline: 0;
        color: $thirdColor;
        background-color: inherit;
        padding: 8px 18px;

        &-red {
          color: $red;
        }

        &:hover {
          background-color: $ctaGrayHover;
        }
      }
    }
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
      grid-template-areas: "text icon";
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
        position: relative;
        padding: 10px 24px;
        display: grid;
        grid-template-columns: 9fr 1fr;
        grid-template-areas: "text more";
        cursor: pointer;

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

          &-bloc {
            z-index: 1;
            position: absolute;
            display: none;
            transform: translateY(-2%);
            right: -145px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: $ctaGray;
            padding-top: 8px;
            padding-bottom: 8px;
            border-radius: 4px;
            font-size: 14px;

            &-input {
              display: flex;
              width: 100%;
              justify-content: flex-start;
              align-items: center;
              cursor: pointer;
              border: 0;
              outline: 0;
              color: $thirdColor;
              background-color: inherit;
              padding: 8px 18px;

              &-red {
                color: $red;
              }

              &:hover {
                background-color: $ctaGrayHover;
              }
            }
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
      min-width: 350px;
      min-height: 350px;
      height: max-content;
      width: max-content;
      color: $ctaGray;
      margin-right: 24px;
      margin-bottom: 24px;
      transition: all 0.3s ease-in-out;

      &:hover {
        border-color: $thirdColor;
        color: $thirdColor;
        transform: scale(1.1);
      }

      &-more {
        position: absolute;
        top: 8px;
        right: 8px;
        transition: background-color 0.3s ease-in-out;
        height: 24px;
        width: 32px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
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

      &-bloc {
        z-index: 1;
        position: absolute;
        display: none;
        top: 35px;
        right: 8px;
        flex-direction: column;
        justify-content: flex-start;
        background-color: $ctaGray;
        padding-top: 8px;
        padding-bottom: 8px;
        border-radius: 4px;

        &-input {
          display: flex;
          width: 100%;
          justify-content: flex-start;
          align-items: center;
          cursor: pointer;
          border: 0;
          outline: 0;
          color: $thirdColor;
          background-color: inherit;
          padding: 8px 18px;
          font-size: 12px;

          &-red {
            color: $red;
          }

          &:hover {
            background-color: $ctaGrayHover;
          }
        }
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

  &-red {
    padding: 12px 44px;
    background-color: $red;
    color: $thirdColor;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: $secondaryColor;
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
