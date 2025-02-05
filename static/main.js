function buy() {
    alert('매수되었습니다.');
}

$(document).ready(function (){
    show_kospi()
    show_kosdaq()
});

function show_kospi() {
    $.ajax({
        type: 'GET',
        url: '/main/ko_spi',
        data: {},
        success: function (response) {
            let kospis = response['kospi']
             console.log(kospis)
            for (let i = 0; i < kospis.length; i++) {
                let rank = kospis[i]['rank']
                let stock_nm = kospis[i]['stock_nm']
                let price = kospis[i]['re_price']
                let stock_url = kospis[i]['url']
                let temp_html = `
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                          현재 순위 ${rank}
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                             ${stock_nm}: ${price}
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a class="card-footer-item" onclick="buy()">매수</a>
                        <a href="${stock_url}" class="card-footer-item">네이버 정보</a>
                    </footer>
                </div>`
                $("#kos_pi_box").append(temp_html)
            }

        }
    })
}


function show_kosdaq() {
    $.ajax({
        type: 'GET',
        url: '/main/kos_daq',
        data: {},
        success: function (response) {
            let kosdaq = response['kosdaq']

            for (let i = 0; i < kosdaq.length; i++) {
                let rank = kosdaq[i]['rank']
                let stock_nm = kosdaq[i]['stock_nm']
                let price = kosdaq[i]['re_price']
                let stock_url = kosdaq[i]['url']
                let temp_html = `
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                          현재 순위 ${rank}
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                             ${stock_nm}: ${price}
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a class="card-footer-item" onclick="buy()">매수</a>
                        <a href="${stock_url}" class="card-footer-item">네이버 정보</a>
                    </footer>
                </div>`
                $("#kos_daq_box").append(temp_html)
            }
            }
    })
}

function sign_out() {
    $.removeCookie('mytoken', {path: '/'})
    window.location.replace('/main')
}