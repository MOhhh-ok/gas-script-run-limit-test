/**
 * google.script.runで呼び出すテスト関数
 */
function test(str) {
    return 'Success';
}

/**
 * ダイアログを表示する
 */
function showDialog() {
    // ダイアログに表示するHTML
    const html = `
        <div id='log'></div>
        <script>
            // ログを出力する関数
            const log = str => document.querySelector('#log').innerHTML+=str+'<br/>';
            
            // 文字数指定
            const length = prompt('文字数を入力してください');
            
            // テスト文字列生成
            const testString='a'.repeat(length);
            
            // テスト文字列のサイズを取得
            const size=new Blob([testString]).size;
            log('size: '+(size/1000/1000)+'MB');

            // google.script.run
            google.script.run
                .withSuccessHandler(log)
                .withFailureHandler(log)
                .test(testString);
        </script>`;

    // ダイアログを表示
    SpreadsheetApp.getUi().showModalDialog(
        HtmlService.createHtmlOutput(html),
        'Dialog'
    );
}