import styled from "styled-components"

export const StyledNav = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
gap : 15px;
width: 100vw;
height: 60px;
padding: 0 20px;
padding: 0 20px;
.menu-background {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: rgba( 0, 0, 0, 40%);
        width: 100vw;
        height: 100vh;
        transform: translateX(-101vw);
        transition: .3s;
    }
.menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: white;
    height: 100vh;
    width: 280px;
    padding: 20px;
    .menu-cross {
        height: 20px;
        width: 20px;
        filter: brightness(0);
    }
    a:nth-of-type(1) {
        margin-top: 30px;
    }
    a {
        color: black;
        text-decoration: none;
        font-size: 20px;
        font-weight: 700;
    }
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    overflow: visible;
    .hamburger-image{
        width: 25px;
        height: 20px;
        cursor: pointer;
        filter: brightness(0);
    }
     .cart-image-container, .avatar-image {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
    .logo-text {
        font-size: 24px;
        font-weight: 700;
        text-decoration: none;
        color: black;
        cursor: pointer;
    }
    .cart-image-container {
        position: relative;
        overflow-x: visible;
        .cart-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            filter: brightness(0);
        }
        .products-number {
            width: 20px;
            height: 20px;
            border: 1px solid black;
            border-radius: 100%;
            background-color: red;
            z-index: 2;
            position: absolute;
            top: -10%;
            right: -30%;
            text-align: center;
            font-weight: 700;
            font-size: 14px;
            overflow: hidden;
        }
    }
}

.title {
    line-height: 25px;
}
.menu-background.active {
    transform: translateX(0);
}

.cart-container {
    display: flex;
    flex-direction: column;
    width: calc(100% - 20px);
    height: 500px;
    position: absolute;
    top: 80px;
    left: 10px;
    z-index: 2;
    background-color: white;
    border-radius: 8px;
    transition: .3s ease-in-out;
    transform: translateY(-100vh);
    border: 1px solid black;
    .cart-header {
        height: 10%;
        padding: 20px;
        border-bottom: 1px solid hsl(220, 14%, 75%);
        font-weight: 700;
        overflow: hidden;
    }
    .cart-order {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 10px;
        width: 100%;
        max-height: 90%;
        justify-content: start;
        align-items: center;
        font-weight: 700;
        color: hsl(219, 9%, 45%);
        overflow: scroll;
        .cart-product-wrapper {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100px;
            min-height: 100px;
            width: 100%;
            padding: 5px;
            border: 1px solid black;
            border-radius: 8px;
            background-color: hsl(25,100%,94%);
            .image-wrapper {
                position: relative;
                width: 150px;
                height: 100%;
                overflow: hidden;
                margin: 0 20px 0 20px; 
                border-radius: 8px;
                flex-grow: 1;
                .background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    filter: blur(10px);
                }
                img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        .trash {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 2;
        }
        }
        
    } 
    .cart-summary {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 10%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid hsl(220, 14%, 75%);
        .total , .checkout {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            font-weight: 700;
        }
        .checkout {
            border-left: 1px solid hsl(220, 14%, 75%);
            text-decoration: none;
            color: black;
        }
    }
}
.cart-container.active {
    transform: translateY(0);
}
`