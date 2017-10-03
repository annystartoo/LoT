<?php require ("php/layout_head.php"); ?>
		<div class="index-ad">
			<img src="images/ad1.jpg">
		</div>
		<div class="index-tab">
			<!--<div class="tabtit"><img src="images/tit-index.jpg"></div>-->
			
			<?php for($i=1; $i<=4; $i++){ ?>

			<div class="tab4s">
				<li class="tab4s-img"><img src="images/temp<?php echo $i; ?>.jpg"></li>
				<li class="tab4s-tit">遊戲截圖 <?php echo $i; ?></li>
				<div class="tab4s-txt">
					隨機圖片呈現產品圖片的文字說明區塊 <?php echo $i; ?>
				</div>
				<div class="tab4s-himg">
					<img title="前往" src="images/link-icon.png">
				</div>
			</div>

			<?php } ?>
			
			<!--<div class="tab4s">
				<li><img src="images/temp.jpg"></li>
				<li class="tab4s-tit">遊戲截圖</li>
			</div>
			<div class="tab4s">
				<li><img src="images/temp.jpg"></li>
				<li class="tab4s-tit">遊戲截圖</li>
			</div>
			<div class="tab4s">
				<li><img src="images/temp.jpg"></li>
				<li class="tab4s-tit">遊戲截圖</li>
			</div>-->
		</div>
		<div class="w1000">
			<!--<a class="btn2" title="PHP全能網頁設計師" href="prolist.php">PHP全能網頁設計師課程介紹</a>-->
		</div>
		
<?php require ("php/layout_footer.php"); ?>