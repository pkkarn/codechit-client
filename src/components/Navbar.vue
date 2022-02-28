<template>
    <div id="navbar_comp">
        <nav>
            <div class="navbar_comp__left">
                <span class="main-title"> CodeChit </span>
            </div>
            <div class="navbar_comp__middle">
                <router-link tag="a" class="router-link" :to="{name: 'home'}">Home</router-link>
                <router-link tag="a" class="router-link" :to="{name: 'videos'}">Videos</router-link>
                <router-link tag="a" class="router-link" :to="{name: 'about'}">About</router-link>
                <router-link tag="a" class="router-link" :to="{name: 'contact'}">Contact</router-link>
                <!-- <a href="#" class="router-link">Home</a>
                <a href="#" class="router-link">Videos</a>
                <a href="#" class="router-link">About</a>
                <a href="#" class="router-link">Contact</a> -->
            </div>
            <div class="navbar_comp__end">
                Game of thrones
            </div>
        </nav>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

#navbar_comp {
    background: $navbar-color;

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: $general-padding;
        color: $navbar-text-color;
        font-family: $navbar-font;
    }

    .navbar_comp {
        &__middle {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    .router-link {
        color: $navbar-text-color;
        margin-left: $general-margin;
        letter-spacing: 1px;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
            cursor: hover;
            color: $navbar-link-hover-color;
        }
    }

    .main-title {
        letter-spacing: 0.625rem;
        color: $main-color;
    }

}

</style>