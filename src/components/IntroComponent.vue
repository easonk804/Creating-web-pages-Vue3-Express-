<template>
    <div class="intro-container">
        <div class="intro-items">
            <div class="in-container">
                <!-- <router-link to="/in" class="intro-item">智能硬件</router-link> -->
                <router-link to="/in">
                    <img src="../assets/images/IN.jpg" alt="智能硬件">
                    <span class="intro-text">智能硬件</span>
                </router-link>
            </div>
            <div class="aiar-container">
                <div class="ai-container">
                    <router-link to="/ai">
                        <img src="../assets/images/AI.jpg" alt="AI">
                        <span class="intro-text">AI</span>
                    </router-link>
                </div>
                <div class="ar-container">
                    <router-link to="/ar">
                        <img src="../assets/images/AR.jpg" alt="AR">
                        <span class="intro-text">AR</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="intro-news">
            <router-link to="/news">
                <img src="../assets/images/News.jpg" alt="News">
                <span class="news-text">如何利用AIGC提高日常工作效率</span>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>

.intro-container {

    margin-bottom: 20px;
    display: flex;

    .intro-items {
        margin-right: 10px;
        border-radius: 4px;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;

        .in-container {
            height: 50%;
            flex: 1;
            position: relative;
            margin-bottom: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;

            :hover {
                transform: translateY(-5px);
                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;
            }

            .intro-text {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                font-size: 24px;
                font-weight: bold;
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
            }
        }

        .aiar-container {
            display: flex;
            flex-direction: raw;
            flex: 1;
            border-radius: 4px;

            .ai-container {
                width: 50%;
                position: relative;
                margin-right: 10px;
                flex: 1;
                transition: transform 0.3s ease, box-shadow 0.3s ease;

                :hover {
                    transform: translateY(-5px);
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 10px;
                }

                .intro-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                    font-size: 24px;
                    font-weight: bold;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
                }
            }

            .ar-container {
                flex: 1;
                position: relative;
                transition: transform 0.3s ease, box-shadow 0.3s ease;

                :hover {
                    transform: translateY(-5px);
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 10px;
                }

                .intro-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                    font-size: 24px;
                    font-weight: bold;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
                }
            }
        }
    }

    .intro-news {
        flex: 1;
        position: relative;
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        :hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }

        .news-text {
            position: absolute;
            width: 80%;
            top: 80%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 24px;
            font-weight: bold;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
    }
}


</style>