		$(document).ready(function() {

			/*$(".packagename").text($(".headingt.package1").text());
			$("#packagaenameinput").attr("value",$(".packagename").text());

			$(".pbutton").on('click',function(e){
				e.preventDefault();
				var cl=$(this).attr("class").split(" ")[1];
				$(".blink").removeClass("active");
				$(".pheading").addClass("hide");
				$(".pbody").addClass("hide");
				$(".pheading."+cl).removeClass("hide");
				$(".pbody."+cl).removeClass("hide");
				$(".blink."+cl).addClass("active");
				//alert($(".packagename").text());
				//alert($(".headingt."+cl).text());
				$(".packagename").text($(".headingt."+cl).text());
			});*/

			var twowaylist={};


			twowaylist['Ahmedabad-Bangalore-Ahmedabad']= 26987;
			twowaylist['Ahmedabad-Bagdogra-Ahmedabad']= 28487;
			twowaylist['Ahmedabad-Guwahati-Ahmedabad']= 26987;
			twowaylist['Ahmedabad-Kolkata-Ahmedabad']= 37896;

			twowaylist['Bangalore-Delhi-Bangalore']=38496;
			twowaylist['Bangalore-Goa-Bangalore']=-17500;
			twowaylist['Bangalore-Pune-Bangalore']=-17500;


			twowaylist['Chennai-Delhi-Chennai']=38454;
			twowaylist['Chennai-PortBlair-Chennai']=41710;
			twowaylist['Chennai-Pune-Chennai']=28004;
			twowaylist['Cochin-Delhi-Cochin']=44288;

			twowaylist['Delhi-Ahmedabad-Delhi']=18465;
			twowaylist['Delhi-Bagdogra-Delhi']=28019;
			twowaylist['Delhi-Goa-Delhi']=27426;
			twowaylist['Delhi-Guwahati-Delhi']=28187;
			twowaylist['Delhi-Jammu-Delhi']=16543;
			twowaylist['Delhi-Leh-Delhi']=28191;
			twowaylist['Delhi-Lucknow-Delhi']=16303;
			twowaylist['Delhi-Nagpur-Delhi']=29154;
			twowaylist['Delhi-PortBlair-Delhi']=64213;
			twowaylist['Delhi-Pune-Delhi']=36057;
			twowaylist['Delhi-Patna-Delhi']=21437;
			twowaylist['Delhi-Ranchi-Delhi']=26759;
			twowaylist['Delhi-Srinagar-Delhi']=18228;


			twowaylist['Jaipur-Bangalore-Jaipur']=38767;
			twowaylist['Jaipur-Chennai-Jaipur']=38767;

			twowaylist['Kolkata-Bagdogra-Kolkata']=18300;
			twowaylist['Kolkata-Delhi-Kolkata']=29174;
			twowaylist['Kolkata-Guwahati-Kolkata']=17292;
			twowaylist['Kolkata-PortBlair-Kolkata']=40766;

			twowaylist['Mumbai-Ahmedabad-Mumbai']=23875;
			twowaylist['Mumbai-Chennai-Mumbai']=28191;
			twowaylist['Mumbai-Cochin-Mumbai']=30901;
			twowaylist['Mumbai-Goa-Mumbai']=20589;
			twowaylist['Mumbai-Delhi-Mumbai']=36057;
			twowaylist['Mumbai-Guwahati-Mumbai']=-45201;
			twowaylist['Mumbai-Chandigarh-Mumbai']=36057;
			twowaylist['Mumbai-Jaipur-Mumbai']=28372;
			twowaylist['Mumbai-Kolkata-Mumbai']=38727;
			twowaylist['Mumbai-Lucknow-Mumbai']=19500;
			twowaylist['Mumbai-Nagpur-Mumbai']=23699;
			twowaylist['Mumbai-Patna-Mumbai']=36057;
			twowaylist['Mumbai-PortBlair-Mumbai']=43593;
			twowaylist['Mumbai-Ranchi-Mumbai']=36057;
			twowaylist['Mumbai-Srinagar-Mumbai']=-43593;



			twowaylist['Srinagar-Jammu-Srinagar']=15980;


			$("#roundtripcbox").append("<option value=\"Delhi-Srinagar-Delhi\">Delhi-Srinagar-Delhi</option>");


			for (var prop in twowaylist){
				var addstr="<option value="+"\""+prop+"\">"+prop+"</option>";
				$("#roundtripcbox").append(addstr);
			}

			$("#roundtripcbox").on('change', function (e) {
				$("#roundtripprice").text(twowaylist[$("#roundtripcbox").val()]);
				var m=parseInt(twowaylist[$("#roundtripcbox").val()]);
				if (m>15000) $("#roundtripdeal").text("Deal: Buy 4 tickets, get a travel voucher of Rs.15000 free!");
				if (m>=10000 && m<15000) $("#roundtripdeal").text("Deal: Buy 4 tickets, get a travel voucher of Rs.10000 free!");
				if (m>=5000 && m<10000) $("#roundtripdeal").text("Deal: Buy 4 tickets, get a travel voucher of Rs.5000 free!");

				if (m<5000 ) {
					$("#roundtripprice").text(twowaylist[$("#roundtripcbox").val()].toString().substr(1,6));
					$("#roundtripdeal").text("No deal on this route");
				}
			});


			var onewaylist={};

onewaylist['	Ahmedabad	-	Kolkata	']=	16073	;
onewaylist['	Ahmedabad	-	Guwahati	']=	17273	;
onewaylist['	Ahmedabad	-	Bangalore	']=	17273	;
onewaylist['	Ahmedabad	-	Jaipur	']=	16571	;
onewaylist['	Ahmedabad	-	Chennai	']=	16571	;
onewaylist['	Ahmedabad	-	Bagdogra	']=	18773	;
onewaylist['	Ahmedabad	-	Mumbai	']=	11943	;
onewaylist['	Ahmedabad	-	Delhi	']=	13765	;
onewaylist['	Bagdogra	-	Ahmedabad	']=	18773	;
onewaylist['	Bagdogra	-	Kolkata	']=	9150	;
onewaylist['	Bagdogra	-	Delhi	']=	16073	;
onewaylist['	Bangalore	-	Delhi	']=	19257	;
onewaylist['	Bangalore	-	Guwahati	']=	18635	;
onewaylist['	Bangalore	-	Ahmedabad	']=	17273	;
onewaylist['	Bangalore	-	jaipur	']=	19282	;
onewaylist['	Chandigarh	-	Mumbai	']=	18081	;
onewaylist['	Chennai	-	Delhi	']=	19362	;
onewaylist['	Chennai	-	Pune	']=	14002	;
onewaylist['	Chennai	-	Port Blair	']=	20855	;
onewaylist['	Chennai	-	Mumbai	']=	14013	;
onewaylist['	Chennai	-	jaipur	']=	19282	;
onewaylist['	Cochin	-	Delhi	']=	22257	;
onewaylist['	Cochin	-	Mumbai	']=	15390	;
onewaylist['	Delhi	-	Ahmedabad	']=	13765	;
onewaylist['	Delhi	-	Guwahati	']=	18523	;
onewaylist['	Delhi	-	Nagpur	']=	14442	;
onewaylist['	Delhi	-	Pune	']=	18081	;
onewaylist['	Delhi	-	Patna	']=	8900	;
onewaylist['	Delhi	-	Ranchi	']=	8900	;
onewaylist['	Delhi	-	Lucknow	']=	5340	;
onewaylist['	Delhi	-	Bagdogra	']=	16073	;
onewaylist['	Delhi	-	Leh	']=	14013	;
onewaylist['	Delhi	-	Jammu	']=	8200	;
onewaylist['	Delhi	-	Port Blair	']=	32025	;
onewaylist['	Delhi	-	Srinagar	']=	11400	;
onewaylist['	Delhi	-	Goa	']=	16526	;
onewaylist['	Delhi	-	Bangalore	']=	19257	;
onewaylist['	Delhi	-	Mumbai	']=	18081	;
onewaylist['	Delhi	-	Kolkata	']=	14721	;
onewaylist['	Delhi	-	Chennai	']=	19362	;
onewaylist['	Delhi	-	Cochin	']=	22257	;
onewaylist['	Goa	-	Mumbai	']=	10242	;
onewaylist['	Goa	-	Delhi	']=	16526	;
onewaylist['	Guwahati	-	Ahmedabad	']=	17273	;
onewaylist['	Guwahati	-	Delhi	']=	18523	;
onewaylist['	Guwahati	-	Kolkata	']=	8646	;
onewaylist['	Jaipur	-	Bangalore	']=	19282	;
onewaylist['	Jaipur	-	Chennai	']=	19282	;
onewaylist['	Jaipur	-	Mumbai	']=	14205	;
onewaylist['	Jammu	-	Delhi	']=	8200	;
onewaylist['	Jammu	-	Srinagar	']=	8200	;
onewaylist['	Kolkata	-	Delhi	']=	14721	;
onewaylist['	Kolkata	-	Bagdogra	']=	9150	;
onewaylist['	Kolkata	-	Guwahati	']=	8646	;
onewaylist['	Kolkata	-	Port Blair	']=	17383	;
onewaylist['	Kolkata	-	Ahmedabad	']=	16073	;
onewaylist['	Kolkata	-	Mumbai	']=	19282	;
onewaylist['	Leh	-	Delhi	']=	14013	;
onewaylist['	Lucknow	-	Mumbai	']=	9750	;
onewaylist['	Lucknow	-	Delhi	']=	5340	;
onewaylist['	Mumbai	-	Ahmedabad	']=	11943	;
onewaylist['	Mumbai	-	Kolkata	']=	19282	;
onewaylist['	Mumbai	-	Delhi	']=	18081	;
onewaylist['	Mumbai	-	Chandigarh	']=	18081	;
onewaylist['	Mumbai	-	Jaipur	']=	14205	;
onewaylist['	Mumbai	-	Lucknow	']=	9750	;
onewaylist['	Mumbai	-	Chennai	']=	14013	;
onewaylist['	Mumbai	-	Nagpur	']=	11767	;
onewaylist['	Mumbai	-	Patna	']=	18081	;
onewaylist['	Mumbai	-	Ranchi	']=	18081	;
onewaylist['	Mumbai	-	Cochin	']=	15390	;
onewaylist['	Mumbai	-	Goa	']=	10242	;
onewaylist['	Mumbai	-	Port Blair	']=	19256	;
onewaylist['	Mumbai	-	Port Blair	']=	35232	;
onewaylist['	Nagpur	-	Mumbai	']=	11767	;
onewaylist['	Nagpur	-	Delhi	']=	14442	;
onewaylist['	Patna	-	Mumbai	']=	18081	;
onewaylist['	Patna	-	Delhi	']=	8900	;
onewaylist['	Port Blair	-	Mumbai	']=	19256	;
onewaylist['	Port Blair	-	Mumbai	']=	35232	;
onewaylist['	Port Blair	-	Kolkata	']=	17383	;
onewaylist['	Port Blair	-	Delhi	']=	32025	;
onewaylist['	Port Blair	-	Chennai	']=	20855	;
onewaylist['	Pune	-	Delhi	']=	18081	;
onewaylist['	Pune	-	Chennai	']=	14002	;
onewaylist['	Ranchi	-	Mumbai	']=	18081	;
onewaylist['	Ranchi	-	Delhi	']=	8900	;
onewaylist['	Srinagar	-	Jammu	']=	8200	;
onewaylist['	Srinagar	-	Delhi	']=	11400	;





			for (var prop in onewaylist){
				var addstr="<option value="+"\""+prop+"\">"+prop+"</option>";
				$("#onewaycbox").append(addstr);
			}

			$("#onewaycbox").on('change', function (e) {
				$("#onewayprice").text(onewaylist[$("#onewaycbox").val()]);
				var m=parseInt(onewaylist[$("#onewaycbox").val()]);
				if (m>15000) $("#onewaydeal").text("Deal: Buy 4 tickets, get a travel voucher of Rs.15000 free!");
				if (m>=10000 && m<15000) $("#onewaydeal").text("Deal: Buy 4 tickets, get a travel voucher of Rs.10000 free!");
				if (m>=5000 && m<10000) $("#onewaydeal").text("Deal: Buy 4 tickets, get a travel voucher of Rs.5000 free!");

				if (m<5000 ) {
					$("#onewaydeal").text(twowaylist[$("#roundtripcbox").val()].toString().substr(1,6));
					$("#onewaydeal").text("No deal on this route");
				}

			});

			var validate = function () {
				var flag=true;
				if ($("#name").val()=="") {
					$(".namediv").addClass("has-error"); flag=false;
				} else $(".namediv").removeClass("has-error");
				if ($("#email").val()=="") {
					$(".emaildiv").addClass("has-error"); flag=false;
				} else $(".emaildiv").removeClass("has-error");
				if ($("#mobile").val()=="") {
					$(".mobilediv").addClass("has-error"); flag=false;
				} else $(".mobilediv").removeClass("has-error");
				if ($("#organization").val()=="") {
					$(".orgdiv").addClass("has-error"); flag=false;
				} else $(".orgdiv").removeClass("has-error");
				if ($("#panid").val()=="") {
					$(".paniddiv").addClass("has-error"); flag=false;
				} else $(".paniddiv").removeClass("has-error");
				if ($("#traveldate").val()=="") {
					$(".traveldatediv").addClass("has-error"); flag=false;
				} else $(".traveldatediv").removeClass("has-error");
				if ($("#returndate").val()=="") {
					$(".returndatediv").addClass("has-error"); flag=false;
				} else $(".returndatediv").removeClass("has-error");
				if (flag==true) return true;
				$(".alertdiv").text("Please enter the fields marked in red");
				$(".alertdiv").removeClass("alert-info");
				$(".alertdiv").addClass("alert-danger");
				return false;
			};
			$(".onewaybutton").on('click', function (e) {
				$(".ival").val("");
				$(".ivaldiv").removeClass("has-error");
				$(".alertdiv").text("All Fields are Mandatory, except where specified");
				$(".alertdiv").addClass("alert-info");
				$(".alertdiv").removeClass("alert-danger");
				$(".packagename").text($("#onewaycbox").val());
				$(".returndatediv").addClass("hide");
				$("#returndate").val("2014-02-12");
				$(".modalsubmitbutton").on('click',function(e){
					validate();
					if (validate()==true) {
						$.post("/postticketrequest",{
						packagename: $(".packagename").text(), name: $("#name").val(), email: $("#email").val(), mobile: $("#mobile").val(), org: $("#organization").val(),
						panid: $("#panid").val(), traveldate: $("#traveldate").val(), adults: $("#adults").val(), children: $("#children").val(), infants: $("#infants").val(),
						message: $("#message").val(), returndate: ""
						});
						$("#myModal").modal('hide');
						$("#myModal1").modal('show');
					}
 
				});
			});
			$(".twowaybutton").on('click', function (e) {
				$(".ival").val("");
				$(".ivaldiv").removeClass("has-error");
				$(".alertdiv").text("All Fields are Mandatory, except where specified");
				$(".alertdiv").addClass("alert-info");
				$(".alertdiv").removeClass("alert-danger");
				$(".packagename").text($("#roundtripcbox").val());
				$(".returndatediv").removeClass("hide");
				$(".modalsubmitbutton").on('click',function(e){
					validate();
					if (validate()==true) {
					$.post("/postticketrequest",{
						packagename: $(".packagename").text(), name: $("#name").val(), email: $("#email").val(), mobile: $("#mobile").val(), org: $("#organization").val(),
						panid: $("#panid").val(), traveldate: $("#traveldate").val(), adults: $("#adults").val(), children: $("#children").val(), infants: $("#infants").val(),
						message: $("#message").val(), returndate: $("#returndate").val()
					});
					$("#myModal").modal('hide');
					$("#myModal1").modal('show');
					}
 
				});
			});
			var validate2 = function () {
				var flag=true;
				if ($("#name2").val()=="") {
					$(".namediv2").addClass("has-error"); flag=false;
				} else $(".namediv2").removeClass("has-error");
				if ($("#email2").val()=="") {
					$(".emaildiv2").addClass("has-error"); flag=false;
				} else $(".emaildiv2").removeClass("has-error");
				if ($("#mobile2").val()=="") {
					$(".mobilediv2").addClass("has-error"); flag=false;
				} else $(".mobilediv2").removeClass("has-error");
				if ($("#message2").val()=="") {
					$(".messagediv2").addClass("has-error"); flag=false;
				} else $(".messagediv2").removeClass("has-error");
				if (flag==true) return true;
				$(".alertdiv2").text("Please enter the fields marked in red");
				$(".alertdiv2").removeClass("hide");
				return false;
			};
			$(".submitbutton2").on('click', function (e){
				if (validate2()==true) {
					$(".alertdiv2").addClass("hide");
					$("#myModal1").modal('show');
					$.post("/postcontactquery",{
					    name: $("#name2").val(), email: $("#email2").val(), mobile: $("#mobile2").val(), message: $("#message2").val()
					});
					$("#name2").val("");
					$("#email2").val("");
					$("#mobile2").val("");
					$("#message2").val("");
				}
			});
		});