import React from 'react'

export const Somm = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-light navbar-light fixed-top shadow">
                {/* <!--   <a class="navbar-brand" href="#">Offline</a> --> */}
                <a class="navbar-brand" href="#">
                    <img src="http://thestartupfactory.co/wp-content/uploads/2014/04/Logo-Wordmark-Gray-Copy-Bitmap-Copy-8.png" alt="Logo" style="width:80px;" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#searchNavbar">
                    <span class="fa fa-search"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="<?= LANG_URL . '/home' ?>">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="<?= LANG_URL . '/login' ?>">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="<?= LANG_URL . '/register' ?>">Register</a>
                        </li>
                    </ul>
                </div>
                <a href="#">
                    <div class="fa fa-user fa-2x"></div>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
            <div class="container" style="position:relative; margin-top:100px">
                <div class="row">
                    {/* 111111111111111111111111111111 */}
                    <div class="col-lg-3 d-none d-md-block">
                        <ul class="list-group shadow bg-white rounded sticky-top">
                            <li class="list-group-item rounded">List Item 1</li>
                            <li class="list-group-item rounded">List Item 2</li>
                            <li class="list-group-item rounded">List Item 3</li>
                            <li class="list-group-item rounded">List Item 4</li>
                            <li class="list-group-item rounded">List Item 5</li>
                        </ul>
                        <hr class="d-sm-none" />
                    </div>

                    {/* 222222222222222222222222222222222222222 */}
                    <div class="col-md-6"> 
                        <div class="card shadow bg-white rounded">
                            <div class="card-body">
                                <h2>TITLE HEADING</h2>
                                <h5>Title description, Dec 7, 2017</h5>
                                <div class="row justify-content-center">
                                    <div id="mdb-lightbox-ui"></div>
                                    {/* <!-- <div class="mdb-lightbox"> --> */}
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(145).jpg" class="img-fluid circle" />
                                        </a>
                                    </figure>
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(150).jpg" class="img-fluid" />
                                        </a>
                                    </figure>
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(152).jpg" class="img-fluid" />
                                        </a>
                                    </figure>
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(42).jpg" class="img-fluid" />
                                        </a>
                                    </figure>
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(151).jpg" class="img-fluid" />
                                        </a>
                                    </figure>
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(40).jpg" class="img-fluid" />
                                        </a>
                                    </figure>
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(148).jpg" class="img-fluid" />
                                        </a>
                                    </figure>
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" class="img-fluid" />
                                        </a>
                                    </figure>
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(149).jpg" class="img-fluid" />
                                        </a>
                                    </figure>
                                    {/* <!-- </div> --> */}
                                </div>
                            </div>
                        </div>
                        <div class="card shadow bg-white rounded">
                            <div class="card-body">
                                <h2>TITLE HEADING</h2>
                                <h5>Title description, Dec 7, 2017</h5>
                                <div class="row justify-content-center">
                                    <div id="mdb-lightbox-ui"></div>
                                    {/* <!-- <div class="mdb-lightbox"> --> */}
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(145).jpg" class="img-fluid circle" />
                                        </a>
                                    </figure>
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(150).jpg" class="img-fluid" />
                                        </a>
                                    </figure>
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(152).jpg" class="img-fluid" />
                                        </a>
                                    </figure>
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(42).jpg" class="img-fluid" />
                                        </a>
                                    </figure>
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(151).jpg" class="img-fluid" />
                                        </a>
                                    </figure>
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(40).jpg" class="img-fluid" />
                                        </a>
                                    </figure>
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(148).jpg" class="img-fluid" />
                                        </a>
                                    </figure>
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" class="img-fluid" />
                                        </a>
                                    </figure>
                                    <figure class="col-4">
                                        <a href="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg" data-size="1600x1067">
                                            <img alt="picture" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(149).jpg" class="img-fluid" />
                                        </a>
                                    </figure>
                                    {/* <!-- </div> --> */}
                                </div>
                            </div>
                        </div>
                        <hr class="d-sm-none" />
                    </div>

                    {/* 33333333333333333333333333333333333 */}
                    <div class="col-md-3 d-none d-md-block">
                        <ul class="list-group shadow bg-white rounded sticky-top">
                            <li class="list-group-item rounded">List Item 1</li>
                            <li class="list-group-item rounded">List Item 2</li>
                            <li class="list-group-item rounded">List Item 3</li>
                            <li class="list-group-item rounded">List Item 4</li>
                            <li class="list-group-item rounded">List Item 5</li>
                        </ul>
                        <hr class="d-sm-none" />
                    </div>
                </div>
            </div>
        </div>
    )
}
