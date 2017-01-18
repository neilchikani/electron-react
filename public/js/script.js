var electron = require('electron');
const remote = electron.remote;
electron.remote.getCurrentWindow().removeAllListeners();
var baseUrl = remote.getGlobal('baseUrl');

$(document).ready(function () {
  $('.user-authentication').on("click",'a',function (event) {
    event.preventDefault();
    var currentId = $(this).attr('data-id');
    if(currentId){
      $(".user-authentication form").fadeOut(100);
      $('form[data-show="'+currentId+'"]').delay(100).fadeIn(100);
      $('.user-authentication a').removeClass('active');
      $(this).addClass('active');
    }
  });


  $('#loginForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            LoginUsername: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            LoginPassword: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    }
                }
            }
        }

    });

  $('#login-submit').click(function() {
     

    $('#loginForm').data('bootstrapValidator').validate();
    if($('#loginForm').data('bootstrapValidator').isValid())
    {
      var filter = { "include": "roles" };

        $.ajax({
            //url: 'https://jsonplaceholder.typicode.com/posts/1',
            url: baseUrl + 'users/login?filter=' + JSON.stringify(filter),
            method: 'POST',
            data: { "username" : $('#LoginUsername').val(), "password" : $('#LoginPassword').val() },
            success: function (result) {

                $.ajax({
                    url: baseUrl + 'Users/'+ result.userId + '?access_token=' + result.id + '&filter=' + JSON.stringify(filter),
                    method: 'GET',
                    //data: { "id" : result.userId },
                    success: function (roleResult) {

                        if(('sessionStorage' in window) && window['sessionStorage'] !== null){
                            sessionStorage.setItem('username',$('#LoginUsername').val());
                            sessionStorage.setItem('userId',result.userId);
                            sessionStorage.setItem('roleId',roleResult.roles[0] != undefined ? roleResult.roles[0].id : "");
                            sessionStorage.setItem('accesstoken',result.id);

                        }           

                        const remote = require('electron').remote;
                        //var win = new BrowserWindow({ width: 800, height: 600 });
                        const BrowserWindow = remote.BrowserWindow;

                        if((roleResult.roles[0] != undefined ? roleResult.roles[0].id : "") == 1)
                            BrowserWindow.getFocusedWindow().loadURL('file://' + __dirname + '/admin/admin.html');
                        else 
                            BrowserWindow.getFocusedWindow().loadURL('file://' + __dirname + '/user/user.html');
                    },
                    error: function (r) {
                        alert('Error in getting role');
                    }
                });
            },
            error: function (r) {
                alert('Error in getting user information');
            }

        });
      }  
  });



  //--------------------------------------Registration-----------------------------------------------------------


  $('#userRegForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'Please enter username'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Please enter password'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: 'Please confirm password'
                    },
                    identical: {
                      field: 'password',
                      message: 'The password and its confirm are not the same'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please enter email'
                    },
                    emailAddress: {
                        message: 'Please enter valid email'
                    }
                }
            },
            contactNo: {
                validators: {
                    notEmpty: {
                        message: 'Please enter contact number'
                    },
                    regexp: {
                        regexp: /^[0-9-()]+$/,
                        message: 'Please enter a valid contact number'
                    }
                }
            },
            optUserType: {
                validators: {
                    notEmpty: {
                        message: 'Please select user type'
                    }
                }
            }
        }

    });


    $("#register-submit").click(function(){
      $('#userRegForm').data('bootstrapValidator').validate();
      if($('#userRegForm').data('bootstrapValidator').isValid()){
        $.ajax(baseUrl + 'users', {
            method: 'POST',
            data: {
             username: $("#username").val(),
             password: $("#password").val(),
             email: $("#email").val(),
             contact: $("#contactNo").val()
            }
          }).then(function(data) {
            //console.log(data);
            alert("Your registration is complete! Please log in.");
            var currentId = 'login-form';
            $(".user-authentication form").fadeOut(100);
            $('form[data-show="'+currentId+'"]').delay(100).fadeIn(100);
            $('.user-authentication a').removeClass('active');
            $('.user-authentication').addClass('active');
            //const remote = require('electron').remote;
            //const BrowserWindow = remote.BrowserWindow;
            //BrowserWindow.getFocusedWindow().loadURL('file://' + __dirname + '/app/index.html');
        });
      }
     
    });
          


});