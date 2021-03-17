<template>
  <div class="hello">
    <header>
      <div class="logotype">Ac</div>
      <div class="title">Changelog</div>
      <a href="#" class="cta">Return to home</a>
    </header>

    <main>
      <aside id="aside">
        <button class="button" id="btn"><span class="gg-menu"></span></button>
        <ul class="nav">
          <li class="nav-menu">
            <a href="#" class="nav-menu-link">Changelog</a>
            <ul class="nav-menu-list">
              <a href="#"><li class="nav-menu-list-link">V 1.0</li></a>
              <a href="#"><li class="nav-menu-list-link">More...</li></a>
            </ul>
          </li>
          <li class="nav-menu">
            <a href="#" class="nav-menu-link">What's next?</a>
            <ul class="nav-menu-list">
              <a href="#"><li class="nav-menu-list-link">Vote for features</li></a>
              <a href="#"><li class="nav-menu-list-link">Suggest features</li></a>
            </ul>
          </li>
          <li class="nav-menu"><a href="#" class="nav-menu-link">FAQ</a></li>
        </ul>
      </aside>
      <div class="article">
        <div class="container">
          <div class="container-title">Title</div>
          <div class="container-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu velit, vestibulum
            vitae nisi eget, tristique efficitur mi. Maecenas id nibh vitae nunc pretium aliquam.
            Integer nisi lectus, sagittis nec ex non, aliquam dignissim leo. Vestibulum pellentesque
            elit risus, non vestibulum tortor efficitur quis. Quisque tortor enim, malesuada in sem
            et, dignissim tempor nisl. Curabitur aliquam tellus lorem, ac sagittis tortor consequat
            in. Integer eget ex massa. Cras neque urna, blandit sed augue ut, eleifend convallis
            libero. Vivamus purus nisl, interdum consectetur fermentum pulvinar, posuere a turpis.
            Curabitur commodo luctus metus quis ultricies. Vivamus sed auctor ex. In aliquam, erat
            non ornare rhoncus, leo arcu accumsan tortor, faucibus gravida justo mauris non dolor.
            Aliquam tincidunt libero at mi placerat, nec scelerisque nulla dignissim. Pellentesque
            ex ante, sollicitudin ut nulla et, vulputate eleifend magna. In mattis nulla sed
            hendrerit venenatis. Duis interdum lectus sed euismod pharetra. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed a risus
            consequat, interdum mi id, laoreet enim. In rhoncus sem ac lobortis vestibulum. Duis
            mollis placerat turpis. Fusce diam metus, pretium ac pulvinar quis, consectetur sit amet
            arcu. Nam vitae augue felis. Cras laoreet, diam sed pretium gravida, augue ipsum euismod
            sem, ac ullamcorper mauris neque vel tortor.
          </div>
        </div>

        <div class="container">
          <div class="container-title">Title</div>
          <div class="container-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu velit, vestibulum
            vitae nisi eget, tristique efficitur mi. Maecenas id nibh vitae nunc pretium aliquam.
            Integer nisi lectus, sagittis nec ex non, aliquam dignissim leo. Vestibulum pellentesque
            elit risus, non vestibulum tortor efficitur quis. Quisque tortor enim, malesuada in sem
            et, dignissim tempor nisl. Curabitur aliquam tellus lorem, ac sagittis tortor consequat
            in. Integer eget ex massa. Cras neque urna, blandit sed augue ut, eleifend convallis
            libero. Vivamus purus nisl, interdum consectetur fermentum pulvinar, posuere a turpis.
            Curabitur commodo luctus metus quis ultricies. Vivamus sed auctor ex. In aliquam, erat
            non ornare rhoncus, leo arcu accumsan tortor, faucibus gravida justo mauris non dolor.
            Aliquam tincidunt libero at mi placerat, nec scelerisque nulla dignissim. Pellentesque
            ex ante, sollicitudin ut nulla et, vulputate eleifend magna. In mattis nulla sed
            hendrerit venenatis. Duis interdum lectus sed euismod pharetra. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed a risus
            consequat, interdum mi id, laoreet enim. In rhoncus sem ac lobortis vestibulum. Duis
            mollis placerat turpis. Fusce diam metus, pretium ac pulvinar quis, consectetur sit amet
            arcu. Nam vitae augue felis. Cras laoreet, diam sed pretium gravida, augue ipsum euismod
            sem, ac ullamcorper mauris neque vel tortor.
          </div>
        </div>
      </div>
    </main>
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
  color: $color-snow;
  font-family: "Archivo", Arial, Helvetica, sans-serif;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: $color-coal;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: $color-gray;
}

.hello {
  background-color: $color-black;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $backgroundGray;
  padding: 36px 60px;

  .logotype {
    font-size: 24px;
    font-weight: 600;
    color: $color-citrus;
  }

  .title {
    font-size: 14px;
    font-weight: 400;
  }

  .cta {
    padding: 8px 14px;
    background-color: $color-coal;
    border-radius: 4px;
    font-size: 12px;
    color: $color-silver;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: $color-gray;
      color: $color-snow;
    }
  }
}

main {
  display: flex;
  height: calc(100vh - 102px);
  overflow: hidden;

  .article {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .container {
    padding: 24px 60px;
    width: 100vw;

    a {
      color: $color-citrus;

      &:hover {
        text-decoration: underline;
      }
    }

    &-title {
      font-size: 40px;
      font-weight: 800;
      margin-bottom: 24px;
    }

    &-content {
      color: $color-silver;
      line-height: 1.5;
      max-width: 40%;
      min-width: 350px;
    }
  }
}

aside {
  background-color: $color-coal;
  width: max-content;
  min-width: 300px;
  height: calc(100vh - 102px);
  font-size: 14px;
  position: relative;

  .nav {
    padding-top: 24px;

    &-menu {
      margin-bottom: 28px;

      &-link {
        padding: 12px 24px;
        transition: color 0.3s ease-in-out;

        &:hover {
          color: $color-citrus;
        }
      }

      &-list {
        margin-top: 28px;

        &-link {
          padding: 12px 40px;
          color: $color-silver;
        }

        &-link:hover {
          color: $color-snow;
          background-color: $color-gray;
        }
      }
    }
  }
}

.button {
  position: absolute;
  display: none;
  cursor: pointer;
  right: 10px;
  top: 10px;
  background-color: transparent;
  height: 40px;
  width: 40px;
  border: 0;
  outline: 0;

  .gg-menu {
    margin-left: 10px;
  }

  &:hover .gg-menu,
  &:hover .gg-menu::after,
  &:hover .gg-menu::before {
    color: $color-citrus;
  }
}

.apear {
  transform: translateX(0%);
}

@media screen and (max-width: 755px) {
  header {
    .title {
      display: none;
    }
  }

  aside {
    transform: translateX(-80%);
    position: absolute;
    transition: all 0.5s ease-in-out;
  }

  .button {
    display: block;
  }

  main {
    .container {
      margin-left: 25px;

      &-content {
        max-width: 100%;
        min-width: 100%;
        padding-right: 10px;
      }
    }
  }
}
</style>
