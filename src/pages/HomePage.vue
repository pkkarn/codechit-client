<template>
    <div class="homepage">
        <div class="row gx-0 w-100">
            <div class="col-sm-8 px-1 mb-2">
                <div class="cd-white shadow rounded-2 p-3 posts-list">
                    <h3 class="cd-font section-title">Top Posts</h3>
                    <div class="post_list row">
                        <div class="p-3 col-sm-4" v-for="val in 9" :key="val">
                            <div class="post rounded-2 cd-primary p-1">
                                <div class="thumbnail">
                                    <img class="img-fluid rounded-2" src="../assets/images/thumbnail.jpg" alt="">
                                </div>
                                <div class="detail p-3">
                                    <h3>How to download things i want without paying single price</h3>
                                    <p class="desc">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, reiciendis numquam quo totam in accusantium repellat cumque dolorum facere, enim...
                                    </p>
                                    <div class="d-flex justify-content-between">
                                        <p>6 July 2022</p>
                                        <p>by PK Karn</p>
                                    </div>
                                    <div class="d-flex flex-wrap">
                                        <div class="p-1 m-1 tag rounded-2" v-for="item in 9" :key="item">Game</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 px-1">
                <div class="cd-white shadow rounded-2 p-3">
                    <h3 class="cd-font section-title">Stats</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.homepage{
    height: 100%;

    &__article-view {
        height: 100%;
        flex-basis: 70%;
        // flex: 2.3;
    }
    &__sidebar-view {
        height: 100%;
        width: 40%;
    }

    .post {
        transition: all 0.3s ease;
        h3 {
            font-family: $navbar-font;
            font-size: 1.5rem;
        }
        &:hover {
            background-color: $fifth-color;
            cursor: pointer;
            color: $main-color;

            
            .tag {
                background-color: $main-color;
                cursor: pointer;
                color: $fifth-color;
                font-family: $main-font;
            }
        }
    }

    .tag {
        font-size: 0.8rem;
        background-color: $fifth-color;
        color: $main-color;
        transition: all 0.3s ease;
    }
}
</style>