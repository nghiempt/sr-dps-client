import {ApiUrl} from '../apiUrl';

export default async function createAppPOST(payload: any) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    const response = await fetch(ApiUrl.GET_ALL_APPS, requestOptions);
    if (!response.ok) {
      throw new Error('Failed to create');
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function callApi(payload: any) {
  try {
    const url =
      'https://global-factiva-com.ezproxy.lib.rmit.edu.au/pps/default.aspx?pp=PDF&ppstype=Article';

    const headers = new Headers({
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'Accept-Language': 'en-US,en;q=0.9',
      'Cache-Control': 'max-age=0',
      Connection: 'keep-alive',
      'Content-Type': 'application/x-www-form-urlencoded',
      Cookie:
        'perf_dv6Tr4n=1; RMITLibRemote=5lY7TWXpCBeMTOu; RMITLibRemotel=5lY7TWXpCBeMTOu; RMITLibRemoten=5lY7TWXpCBeMTOu; NSC_JOlvufhzdw2hnu2eu1jqzweqbyipjbt=ffffffff80a20b7f45525d5f4f58455e445a4a42378b; LSLogin=FP%5FUT=B&GL%5FUT=B&FP%5FRS=00RO990000&GL%5FRS=00RO990000&BRIID=205BBECB%2DD555%2D4EC7%2D8802%2D768AE96C73E6; Search=; Mds=; Admn=; General=; AMCVS_CB68E4BA55144CAA0A4C98A5%40AdobeOrg=1; AMCV_CB68E4BA55144CAA0A4C98A5%40AdobeOrg=1585540135%7CMCIDTS%7C19694%7CMCMID%7C68071725038968592264311756912274421523%7CMCAAMLH-1702109059%7C3%7CMCAAMB-1702109059%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1701511459s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C4.4.0; login=avc=0', // Truncated for brevity
      Origin: 'https://global-factiva-com.ezproxy.lib.rmit.edu.au',
      Referer:
        'https://global-factiva-com.ezproxy.lib.rmit.edu.au/ha/default.aspx?page_driver=searchBuilder_Search',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'sec-ch-ua':
        '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      // Add any other headers you need
    });

    const body = new URLSearchParams({
      dct: 'None',
      hs: '0',
      mlt: '',
      pp: '_Undefined',
      sri: 'True',
      hc: 'All',
      elks: 'True',
      ipccs: '0',
      istphst: 'True',
      issse: 'True',
      ipcl_data: 'en',
      frv: 'Frames',
      mlc: 'All',
      cc: 'nghistoricalsearchawsp',
      ctx: '0',
      csa: '0',
      th: '6',
      ao: '10',
      aod: 'SB',
      _HeadlineHistoryManager: '{}',
      ipcos: '0',
      __VIEWSTATE: '',
      directLinkURLName: 'Factiva',
      ht: 'Advanced',
      ipid: '0',
      ipin: '',
      ipgi: 'False',
      isst: 'LegacySavedSearch',
      scs: '[]',
      xsc: '[]',
      xsls: '[]',
      als: '[]',
      xaul: '[]',
      xil: '[]',
      ils: '[]',
      xrl: '[]',
      rls: '[]',
      xnl: '[]',
      nls: '[]',
      xpl: '[]',
      pls: '[]',
      aus: '[]',
      cos: '[]',
      xau: '[]',
      xco: '[]',
      cls: '[]',
      xcl: '[]',
      pes: '[]',
      xpe: '[]',
      nss: '[]',
      xns: '[]',
      ins: '[]',
      xin: '[]',
      res: '[]',
      xre: '[]',
      ipcl: '[EN]',
      iadmio: 'False',
      ist: 'Advanced',
      iceu: '0',
      fess: '[]',
      iefs: '[]',
      sicr: '0',
      aicr: '0',
      cicr: '0',
      nsicr: '0',
      iicr: '0',
      ricr: '0',
      pecr: '0',
      flagBox: 'lo',
      scrAllPub:
        '{14:1,0:0,11:"P|",12:0,4:0,5:0,6:0,7:0,8:"All Publications",10:0}',
      scrAllWeb:
        '{14:3,0:0,11:"W|",12:0,4:0,5:0,6:0,7:0,8:"All Web News",10:0}',
      scrAllPic:
        '{14:2,0:0,11:"I|",12:0,4:0,5:0,6:0,7:0,8:"All Pictures",10:0}',
      scrAllMlt:
        '{14:5,0:0,11:"M|",12:0,4:0,5:0,6:0,7:0,8:"All Multimedia",10:0}',
      scrAllBlg: '{14:6,0:0,11:"B|",12:0,4:0,5:0,6:0,7:0,8:"All Blogs",10:0}',
      searchBuilder: '1',
      isnf: '{}',
      atx: '',
      otx: '',
      ntx: '',
      htx: '',
      assistedSearch: '1',
      ftx: '(blockchain OR decentralized-network OR "blockchain infrastructure" ...)', // Truncated for brevity
      sbFTQSize: '2048',
      dr: '_Unspecified',
      frd: '',
      frm: '',
      fry: '',
      dateFrom_txb: '________',
      dateFrom_extc_ClientState:
        '{"CalendarPosition":1,"CalendarDateDisplayFormat":"d MMMM yyyy","CalendarMonthYearDisplayFormat":"MMM, yyyy"}',
      dateFrom_extc__MaskedEditExtender_ClientState: '',
      tod: '',
      tom: '',
      toy: '',
      dateTo_txb: '________',
      dateTo_extc_ClientState:
        '{"CalendarPosition":0,"CalendarDateDisplayFormat":"d MMMM yyyy","CalendarMonthYearDisplayFormat":"MMM, yyyy"}',
      dateTo_extc__MaskedEditExtender_ClientState: '',
      frdt: '',
      todt: '',
      dfmt: 'DDMMCCYY',
      isrd: 'Medium',
      srcNmOnly: 'on',
      excDiscSrcs: 'on',
      cop: 'Or',
      sop: 'Or',
      iop: 'Or',
      rop: 'Or',
      srcNmOnlylk: 'on',
      excDiscSrcslk: 'on',
      sfd: '',
      istesfn: 'False',
      ister: 'False',
      isteo: 'False',
      hso: 'PublicationDateMostRecentFirst',
      hdl: '{12:0,0:"AFNR000020221027eiap00027",1:0,2:"en",3:{0:"Article"},5:"drn:archive.newsarticle.AFNR000020221027eiap00027",6:"  Industry Insight",7:1,9:"afnr",11:1}',
      recaptchamarkup: `<div id="recaptchadiv"><div class=" recaptchamodalHeader">
    <span class="recaptchamodalTitle"><span class="dj_icon dj_icon-captcha-fail"></span>Your attempt was incorrect. Please try again.</span></div><div class=" recaptchawelcomeHeader">
    <span class="recaptchamodalSubTitle">Please enter the verification information requested below. We request this information to prevent automated machines from illegally downloading large amounts of Factiva content which can result in slower load times for our users.</span></div><div id="recaptcha_dummy_widget" style="display:block"></div><div id="recaptcha_widget" style="display:block"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-xc8ze6wo99qc" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdC1v4SAAAAAFY-SzpR5wQmlwxesMgpQ5fe6Pmv&amp;co=aHR0cHM6Ly9nbG9iYWwtZmFjdGl2YS1jb20uZXpwcm94eS5saWIucm1pdC5lZHUuYXU6NDQz&amp;hl=en&amp;v=-QbJqHfGOUB8nuVRLvzFLVed&amp;size=normal&amp;cb=6xnat52knu75"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div></div>
 <script type="text/javascript">
    var onloadCallback = function() {
        $('#recaptcha_widget').remove();
        $('#recaptcha_dummy_widget').after('<div id="recaptcha_widget" style="display:block"></div>');
        if ($('#recaptcha_widget').attr('data-rcaptcha-response') !== undefined) {
            return;
        }
        if (typeof grecaptcha === 'undefined' || grecaptcha === null || grecaptcha === undefined) {
            console.log('grecaptcha is not undefined or null');
            return;
        }
        var widgetId = grecaptcha.render('recaptcha_widget', {
            'sitekey' : '6LdC1v4SAAAAAFY-SzpR5wQmlwxesMgpQ5fe6Pmv',
            'callback': function() {
                $('#recaptcha_widget').attr('data-rcaptcha-response', grecaptcha.getResponse(widgetId));
            }
        });
    };
 </script><script type="text/javascript" src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&amp;render=explicit" async="" defer="">
 </script><div class="ssSubmit"> <ul class="buttons"> <li class="btn"> <div class="prettyBtn primaryBtn"> <span> Verify </span></div><input type="button" value="Verify" class="standardBtn" id="verifyUser" onclick="SubmitRecaptcha();"></li><li class="btn"> <div class="prettyBtn tertiaryBtn"> <span> Cancel </span></div><input type="button" value="Cancel" class="standardBtn" id="cancelUser" onclick="closeRecaptchaPopup();"></li></ul></div>
<div class="recaptcha_logo"><div>Verification provided by <br>reCAPTCHA </div><div></div></div></div>
    <div id="recaptchaconfirmationdiv" style="display:none;"><div class="dj_modal-content-wrap"><div class="dj_user-verification success">
    <div class="message"><span class="dj_icon dj_icon-captcha-success"></span>You are verified for download</div>
    <p class="continueparagraph">
    Thank you for verifying. Please click the "Continue" button below to complete your initial request.
    </p>
    <div class="dj_btn-group-lrg">
    <div class="submitcontinue"> <ul class="buttons"> <li class="btn"> 
    <div class="prettyBtn primaryBtn"> <span class="continuespan"> Continue </span></div><input type="button" onclick="ConfirmRecaptchaClick();" id="verifyUser" class="standardBtn" value="Continue">
    </li></ul></div>
    </div>
    </div></div></div>`,
      continuescript:
        'byPassWcCheck=true; _proceedWithDownload=true; viewProcessing("../pps/default.aspx?pp=PDF&ppstype=Article",true);',
      dfd: 'FULL',
      ipf: 'undefined',
      'g-recaptcha-response': '',
    });

    const options = {
      method: 'POST',
      headers: headers,
      body: body,
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Failed to create');
    }
    return response;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export function callApi2() {
  const url =
    'https://global-factiva-com.ezproxy.lib.rmit.edu.au/pps/default.aspx?pp=PDF&ppstype=Article';

  const headers = new Headers({
    Accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cache-Control': 'max-age=0',
    Connection: 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded',
    Cookie:
      'perf_dv6Tr4n=1; RMITLibRemote=5lY7TWXpCBeMTOu; RMITLibRemotel=5lY7TWXpCBeMTOu; RMITLibRemoten=5lY7TWXpCBeMTOu; NSC_JOlvufhzdw2hnu2eu1jqzweqbyipjbt=ffffffff80a20b7f45525d5f4f58455e445a4a42378b; LSLogin=FP%5FUT=B&GL%5FUT=B&FP%5FRS=00RO990000&GL%5FRS=00RO990000&BRIID=205BBECB%2DD555%2D4EC7%2D8802%2D768AE96C73E6; Search=; Mds=; Admn=; General=; AMCVS_CB68E4BA55144CAA0A4C98A5%40AdobeOrg=1; AMCV_CB68E4BA55144CAA0A4C98A5%40AdobeOrg=1585540135%7CMCIDTS%7C19694%7CMCMID%7C68071725038968592264311756912274421523%7CMCAAMLH-1702109059%7C3%7CMCAAMB-1702109059%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1701511459s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C4.4.0; login=avc=0', // Truncated for brevity
    Origin: 'https://global-factiva-com.ezproxy.lib.rmit.edu.au',
    Referer:
      'https://global-factiva-com.ezproxy.lib.rmit.edu.au/ha/default.aspx?page_driver=searchBuilder_Search',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'sec-ch-ua':
      '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    // Add any other headers you need
  });

  const body = new URLSearchParams({
    dct: 'None',
    hs: '0',
    mlt: '',
    pp: '_Undefined',
    sri: 'True',
    hc: 'All',
    elks: 'True',
    ipccs: '0',
    istphst: 'True',
    issse: 'True',
    ipcl_data: 'en',
    frv: 'Frames',
    mlc: 'All',
    cc: 'nghistoricalsearchawsp',
    ctx: '0',
    csa: '0',
    th: '6',
    ao: '10',
    aod: 'SB',
    _HeadlineHistoryManager: '{}',
    ipcos: '0',
    __VIEWSTATE: '',
    directLinkURLName: 'Factiva',
    ht: 'Advanced',
    ipid: '0',
    ipin: '',
    ipgi: 'False',
    isst: 'LegacySavedSearch',
    scs: '[]',
    xsc: '[]',
    xsls: '[]',
    als: '[]',
    xaul: '[]',
    xil: '[]',
    ils: '[]',
    xrl: '[]',
    rls: '[]',
    xnl: '[]',
    nls: '[]',
    xpl: '[]',
    pls: '[]',
    aus: '[]',
    cos: '[]',
    xau: '[]',
    xco: '[]',
    cls: '[]',
    xcl: '[]',
    pes: '[]',
    xpe: '[]',
    nss: '[]',
    xns: '[]',
    ins: '[]',
    xin: '[]',
    res: '[]',
    xre: '[]',
    ipcl: '[EN]',
    iadmio: 'False',
    ist: 'Advanced',
    iceu: '0',
    fess: '[]',
    iefs: '[]',
    sicr: '0',
    aicr: '0',
    cicr: '0',
    nsicr: '0',
    iicr: '0',
    ricr: '0',
    pecr: '0',
    flagBox: 'lo',
    scrAllPub:
      '{14:1,0:0,11:"P|",12:0,4:0,5:0,6:0,7:0,8:"All Publications",10:0}',
    scrAllWeb: '{14:3,0:0,11:"W|",12:0,4:0,5:0,6:0,7:0,8:"All Web News",10:0}',
    scrAllPic: '{14:2,0:0,11:"I|",12:0,4:0,5:0,6:0,7:0,8:"All Pictures",10:0}',
    scrAllMlt:
      '{14:5,0:0,11:"M|",12:0,4:0,5:0,6:0,7:0,8:"All Multimedia",10:0}',
    scrAllBlg: '{14:6,0:0,11:"B|",12:0,4:0,5:0,6:0,7:0,8:"All Blogs",10:0}',
    searchBuilder: '1',
    isnf: '{}',
    atx: '',
    otx: '',
    ntx: '',
    htx: '',
    assistedSearch: '1',
    ftx: '(blockchain OR decentralized-network OR "blockchain infrastructure" ...)', // Truncated for brevity
    sbFTQSize: '2048',
    dr: '_Unspecified',
    frd: '',
    frm: '',
    fry: '',
    dateFrom_txb: '________',
    dateFrom_extc_ClientState:
      '{"CalendarPosition":1,"CalendarDateDisplayFormat":"d MMMM yyyy","CalendarMonthYearDisplayFormat":"MMM, yyyy"}',
    dateFrom_extc__MaskedEditExtender_ClientState: '',
    tod: '',
    tom: '',
    toy: '',
    dateTo_txb: '________',
    dateTo_extc_ClientState:
      '{"CalendarPosition":0,"CalendarDateDisplayFormat":"d MMMM yyyy","CalendarMonthYearDisplayFormat":"MMM, yyyy"}',
    dateTo_extc__MaskedEditExtender_ClientState: '',
    frdt: '',
    todt: '',
    dfmt: 'DDMMCCYY',
    isrd: 'Medium',
    srcNmOnly: 'on',
    excDiscSrcs: 'on',
    cop: 'Or',
    sop: 'Or',
    iop: 'Or',
    rop: 'Or',
    srcNmOnlylk: 'on',
    excDiscSrcslk: 'on',
    sfd: '',
    istesfn: 'False',
    ister: 'False',
    isteo: 'False',
    hso: 'PublicationDateMostRecentFirst',
    hdl: '{12:0,0:"AFNR000020221027eiap00027",1:0,2:"en",3:{0:"Article"},5:"drn:archive.newsarticle.AFNR000020221027eiap00027",6:"  Industry Insight",7:1,9:"afnr",11:1}',
    recaptchamarkup: `<div id="recaptchadiv"><div class=" recaptchamodalHeader">
    <span class="recaptchamodalTitle"><span class="dj_icon dj_icon-captcha-fail"></span>Your attempt was incorrect. Please try again.</span></div><div class=" recaptchawelcomeHeader">
    <span class="recaptchamodalSubTitle">Please enter the verification information requested below. We request this information to prevent automated machines from illegally downloading large amounts of Factiva content which can result in slower load times for our users.</span></div><div id="recaptcha_dummy_widget" style="display:block"></div><div id="recaptcha_widget" style="display:block"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-xc8ze6wo99qc" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdC1v4SAAAAAFY-SzpR5wQmlwxesMgpQ5fe6Pmv&amp;co=aHR0cHM6Ly9nbG9iYWwtZmFjdGl2YS1jb20uZXpwcm94eS5saWIucm1pdC5lZHUuYXU6NDQz&amp;hl=en&amp;v=-QbJqHfGOUB8nuVRLvzFLVed&amp;size=normal&amp;cb=6xnat52knu75"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div></div>
 <script type="text/javascript">
    var onloadCallback = function() {
        $('#recaptcha_widget').remove();
        $('#recaptcha_dummy_widget').after('<div id="recaptcha_widget" style="display:block"></div>');
        if ($('#recaptcha_widget').attr('data-rcaptcha-response') !== undefined) {
            return;
        }
        if (typeof grecaptcha === 'undefined' || grecaptcha === null || grecaptcha === undefined) {
            console.log('grecaptcha is not undefined or null');
            return;
        }
        var widgetId = grecaptcha.render('recaptcha_widget', {
            'sitekey' : '6LdC1v4SAAAAAFY-SzpR5wQmlwxesMgpQ5fe6Pmv',
            'callback': function() {
                $('#recaptcha_widget').attr('data-rcaptcha-response', grecaptcha.getResponse(widgetId));
            }
        });
    };
 </script><script type="text/javascript" src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&amp;render=explicit" async="" defer="">
 </script><div class="ssSubmit"> <ul class="buttons"> <li class="btn"> <div class="prettyBtn primaryBtn"> <span> Verify </span></div><input type="button" value="Verify" class="standardBtn" id="verifyUser" onclick="SubmitRecaptcha();"></li><li class="btn"> <div class="prettyBtn tertiaryBtn"> <span> Cancel </span></div><input type="button" value="Cancel" class="standardBtn" id="cancelUser" onclick="closeRecaptchaPopup();"></li></ul></div>
<div class="recaptcha_logo"><div>Verification provided by <br>reCAPTCHA </div><div></div></div></div>
    <div id="recaptchaconfirmationdiv" style="display:none;"><div class="dj_modal-content-wrap"><div class="dj_user-verification success">
    <div class="message"><span class="dj_icon dj_icon-captcha-success"></span>You are verified for download</div>
    <p class="continueparagraph">
    Thank you for verifying. Please click the "Continue" button below to complete your initial request.
    </p>
    <div class="dj_btn-group-lrg">
    <div class="submitcontinue"> <ul class="buttons"> <li class="btn"> 
    <div class="prettyBtn primaryBtn"> <span class="continuespan"> Continue </span></div><input type="button" onclick="ConfirmRecaptchaClick();" id="verifyUser" class="standardBtn" value="Continue">
    </li></ul></div>
    </div>
    </div></div></div>`,
    continuescript:
      'byPassWcCheck=true; _proceedWithDownload=true; viewProcessing("../pps/default.aspx?pp=PDF&ppstype=Article",true);',
    dfd: 'FULL',
    ipf: 'undefined',
    'g-recaptcha-response': '',
  });

  const options = {
    method: 'POST',
    headers: headers,
    body: body,
  };

  fetch(url, options)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
}
