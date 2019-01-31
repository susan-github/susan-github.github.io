/*页面载入完成后，创建复制按钮*/
!function (e, t, a) { 
  /* code */
  var initCopyCode = function(){
    var copyHtml = '';
    copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
    copyHtml += '<span>复制代码</span>';
    copyHtml += '</button>';
    $(".highlight .code pre").before(copyHtml);
    var tipsHtml = '';
    tipsHtml += '<div class="copy-success-tips hidden"><span>复制成功</span></div>';
    $(".highlight table").after(tipsHtml);
    var clipboard = new ClipboardJS('.btn-copy', {
        target: function(trigger) {
            return trigger.nextElementSibling;
        }
    });
    clipboard.on('success', function(e) {
      console.info('copy success:');
      $(".copy-success-tips").removeClass("hidden");
      setTimeout(function() {
        $(".copy-success-tips").addClass("hidden");
      }, 1000);
      e.clearSelection();
    });
  }
  initCopyCode();
}(window, document);