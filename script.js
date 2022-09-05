var email_validation_result;
var mobileQuery = window.matchMedia("(max-width: 768px)");

function formValidation() {
    let first_name = document.getElementById("first-name").value;
    let last_name = document.getElementById("last-name").value;
    let email_address = document.getElementById("email-address").value;
    let password = document.getElementById("password").value;


    if (!first_name) {
        document.getElementById("fn-t").style.display = "block";
        document.getElementById("fn-i").style.display = "block";
    } else {
        document.getElementById("fn-t").style.display = "none";
        document.getElementById("fn-i").style.display = "none";
    }

    if (!last_name) {
        document.getElementById("ln-t").style.display = "block";
        document.getElementById("ln-i").style.display = "block";
    } else {
        document.getElementById("ln-t").style.display = "none";
        document.getElementById("ln-i").style.display = "none";
    }

    if (!email_address) {
        document.getElementById("e-t").style.display = "block";
        document.getElementById("e-i").style.display = "block";
    } else {
        let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        email_validation_result = regex.test(email_address);

        if (email_validation_result) {
            document.getElementById("e-t").style.display = "none";
            document.getElementById("e-i").style.display = "none";
        } else {
            document.getElementById("e-t").style.display = "block";
            document.getElementById("e-i").style.display = "block";
        }
    }

    if (!password) {
        document.getElementById("p-t").style.display = "block";
        document.getElementById("p-i").style.display = "block";
    } else {
        document.getElementById("p-t").style.display = "none";
        document.getElementById("p-i").style.display = "none";
    }

    if (mobileQuery.matches) {
        if (!first_name) {document.getElementById("fn-i").style.top = "64.4vw";}

        if (!last_name) {if (first_name) {document.getElementById("ln-i").style.top = "73.9vw";} else {document.getElementById("ln-i").style.top = "77.2vw";}}

        if (!email_address) {
            if (first_name) {
                if (last_name) {document.getElementById("e-i").style.top = "83.2vw";} else {document.getElementById("e-i").style.top = "86.7vw";}
            } else {
                if (last_name) {document.getElementById("e-i").style.top = "86.7vw";} else {document.getElementById("e-i").style.top = "89.9vw";}
            }
        } else {
            if (!email_validation_result) {
                if (first_name) {
                    if (last_name) {document.getElementById("e-i").style.top = "83.2vw";} else {document.getElementById("e-i").style.top = "86.7vw";}
                } else {
                    if (last_name) {document.getElementById("e-i").style.top = "86.7vw";} else {document.getElementById("e-i").style.top = "89.9vw";}
                }
            }
        }

        if (!password) {
            if (first_name) {
                if (last_name) {
                    if (email_validation_result) {document.getElementById("p-i").style.top = "92.7vw";} else {document.getElementById("p-i").style.top = "96.1vw";}
                } else {
                    if (email_validation_result) {document.getElementById("p-i").style.top = "96.1vw";} else {document.getElementById("p-i").style.top = "99.6vw";}
                }
            } else {
                if (last_name) {
                    if (email_validation_result) {document.getElementById("p-i").style.top = "96.1vw";} else {document.getElementById("p-i").style.top = "99.6vw";}
                } else {
                    if (email_validation_result) {document.getElementById("p-i").style.top = "99.6vw";} else {document.getElementById("p-i").style.top = "102.7vw";}
                }
            }
        }

    } else {
        if (!first_name) {document.getElementById("fn-i").style.top = "14.8vw";}

        if (!last_name) {if (first_name) {document.getElementById("ln-i").style.top = "19.9vw";} else {document.getElementById("ln-i").style.top = "21.6vw"}}

        if (!email_address) {
            if (first_name) {if (last_name) {document.getElementById("e-i").style.top = "25.1vw";} else {document.getElementById("e-i").style.top = "26.8vw";}} 
            else {if (last_name) {document.getElementById("e-i").style.top = "26.8vw";} else {document.getElementById("e-i").style.top = "28.5vw";}}
        } else {
            if (!email_validation_result) {
                if (first_name) {
                    if (last_name) {document.getElementById("e-i").style.top = "25.1vw";} else {document.getElementById("e-i").style.top = "26.8vw";}
                } else {
                    if (last_name) {document.getElementById("e-i").style.top = "26.8vw";} else {document.getElementById("e-i").style.top = "28.5vw";}
                }
            }
        }

        if (!password) {
            if (first_name) {
                if (last_name) {
                    if (email_validation_result) {document.getElementById("p-i").style.top = "30.2vw";} else {document.getElementById("p-i").style.top = "31.9vw";}
                } else {
                    if (email_validation_result) {document.getElementById("p-i").style.top = "31.9vw";} else {document.getElementById("p-i").style.top = "33.6vw";}
                }
            } else {
                if (last_name) {
                    if (email_validation_result) {document.getElementById("p-i").style.top = "31.9vw";} else {document.getElementById("p-i").style.top = "33.6vw";}
                } else {
                    if (email_validation_result) {document.getElementById("p-i").style.top = "33.6vw";} else {document.getElementById("p-i").style.top = "35.3vw";}
                }
            }
        }

    }
}

window.addEventListener("resize", function(){
    let first_name = document.getElementById("first-name").value;
    let last_name = document.getElementById("last-name").value;
    let email_address = document.getElementById("email-address").value;
    let password = document.getElementById("password").value;

    let fn_i = document.getElementById("fn-i").style.display;
    let ln_i = document.getElementById("ln-i").style.display;
    let e_i = document.getElementById("e-i").style.display;
    let p_i = document.getElementById("p-i").style.display;
    
    if (mobileQuery.matches) {
        if (fn_i == "block") {document.getElementById("fn-i").style.top = "64.4vw";}

        if (ln_i == "block") {if (first_name) {document.getElementById("ln-i").style.top = "73.9vw";} else {document.getElementById("ln-i").style.top = "77.2vw";}}

        if (e_i == "block") {
            if (!email_address) {
                if (first_name) {
                    if (last_name) {
                        document.getElementById("e-i").style.top = "83.2vw";
                    } else {document.getElementById("e-i").style.top = "86.7vw";}
                } else {
                    if (last_name) {
                        document.getElementById("e-i").style.top = "86.7vw";
                    } else {document.getElementById("e-i").style.top = "89.9vw";}
                }
            } else {
                if (!email_validation_result) {
                    if (first_name) {
                        if (last_name) {
                            document.getElementById("e-i").style.top = "83.2vw";
                        } else {document.getElementById("e-i").style.top = "86.7vw";}
                    } else {
                        if (last_name) {
                            document.getElementById("e-i").style.top = "86.7vw";
                        } else {document.getElementById("e-i").style.top = "89.9vw";}
                    }
                }
            }
        }
        
        if (p_i == "block") {
            if (first_name) {
                if (last_name) {
                    if (email_validation_result) {document.getElementById("p-i").style.top = "92.7vw";} else {document.getElementById("p-i").style.top = "96.1vw";}
                } else {
                    if (email_validation_result) {document.getElementById("p-i").style.top = "96.1vw";} else {document.getElementById("p-i").style.top = "99.6vw";}
                }
            } else {
                if (last_name) {
                    if (email_validation_result) {document.getElementById("p-i").style.top = "96.1vw";} else {document.getElementById("p-i").style.top = "99.6vw";}
                } else {
                    if (email_validation_result) {document.getElementById("p-i").style.top = "99.6vw";} else {document.getElementById("p-i").style.top = "102.7vw";}
                }
            }
        }

    } else {
        if (fn_i == "block") {document.getElementById("fn-i").style.top = "14.8vw";}

        if(ln_i == "block") {if (first_name) {document.getElementById("ln-i").style.top = "19.9vw";} else {document.getElementById("ln-i").style.top = "21.6vw"}}

        if (e_i == "block") {
            if (!email_address) {
                if (first_name) {
                    if (last_name) {
                        document.getElementById("e-i").style.top = "25.1vw";
                    } else {document.getElementById("e-i").style.top = "26.8vw";}
                } else {
                    if (last_name) {
                        document.getElementById("e-i").style.top = "26.8vw";
                    } else {document.getElementById("e-i").style.top = "28.5vw";}
                }
            } else {
                if (!email_validation_result) {
                    if (first_name) {
                        if (last_name) {
                            document.getElementById("e-i").style.top = "25.1vw";
                        } else {document.getElementById("e-i").style.top = "26.8vw";}
                    } else {
                        if (last_name) {
                            document.getElementById("e-i").style.top = "26.8vw";
                        } else {document.getElementById("e-i").style.top = "28.5vw";}
                    }
                }
            }
        }

        if (p_i == "block") {
            if (first_name) {
                if (last_name) {
                    if (email_validation_result) {document.getElementById("p-i").style.top = "30.2vw";} else {document.getElementById("p-i").style.top = "31.9vw";}
                } else {
                    if (email_validation_result) {document.getElementById("p-i").style.top = "31.9vw";} else {document.getElementById("p-i").style.top = "33.6vw";}
                }
            } else {
                if (last_name) {
                    if (email_validation_result) {document.getElementById("p-i").style.top = "31.9vw";} else {document.getElementById("p-i").style.top = "33.6vw";}
                } else {
                    if (email_validation_result) {document.getElementById("p-i").style.top = "33.6vw";} else {document.getElementById("p-i").style.top = "35.3vw";}
                }
            }
        }
    }


})
