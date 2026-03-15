const songs = [
    {
        "track": "505",
        "artist": "Arctic Monkeys",
        "spotify": "https://open.spotify.com/track/0BxE4FqsDD1Ot4YuBXwAPp",
        "yt_music": "https://music.youtube.com/watch?v=qU9mHegkTc4"
    },
    {
        "track": "Do I Wanna Know?",
        "artist": "Arctic Monkeys",
        "spotify": "https://open.spotify.com/track/5FVd6KXrgO9B3JPmC8OPst",
        "yt_music": "https://music.youtube.com/watch?v=pqrUQrAcfo4"
    },
    {
        "track": "Body Paint",
        "artist": "Arctic Monkeys",
        "spotify": "https://open.spotify.com/track/11jRCxY01k9jvCdUru0EeP",
        "yt_music": "https://music.youtube.com/watch?v=gBdwZeK4igM"
    },
    {
        "track": "Star Treatment",
        "artist": "Arctic Monkeys",
        "spotify": "https://open.spotify.com/track/0b93tWwuoAC0nXe1CfR30I",
        "yt_music": "https://music.youtube.com/watch?v=5QqXXjDKNP4"
    },
    {
        "track": "Big Ideas",
        "artist": "Arctic Monkeys",
        "spotify": "https://open.spotify.com/track/4KPi4VNvPOfKqIp1sx19Xf",
        "yt_music": "https://music.youtube.com/watch?v=QowqM7LUMBY"
    },
    {
        "track": "There’d Better Be A Mirrorball",
        "artist": "Arctic Monkeys",
        "spotify": "https://open.spotify.com/track/0yowbJnnbTLpr99f9l1uba",
        "yt_music": "https://music.youtube.com/watch?v=B-CKookVyhA"
    },
    {
        "track": "Opening Night",
        "artist": "Arctic Monkeys, War Child Records",
        "spotify": "https://open.spotify.com/track/7HXzuAd8UNJj2yCAS0NWbB",
        "yt_music": "https://music.youtube.com/watch?v=sR1rgLFnGOE"
    },
    {
        "track": "A Certain Romance",
        "artist": "Arctic Monkeys",
        "spotify": "https://open.spotify.com/track/0eDQj41kzBhMKQIkTt6OJR",
        "yt_music": "https://music.youtube.com/watch?v=zMupng6KQeE"
    },
    {
        "track": "Stop The World I Wanna Get Off With You",
        "artist": "Arctic Monkeys",
        "spotify": "https://open.spotify.com/track/2QUlMbvD9bL8wHqfsoqoet",
        "yt_music": "https://music.youtube.com/watch?v=H8oiojAmKCI"
    },
    {
        "track": "Calm Like You",
        "artist": "The Last Shadow Puppets",
        "spotify": "https://open.spotify.com/track/0b70nZ5kdm09VlyfHLNjlL",
        "yt_music": "https://music.youtube.com/watch?v=j7qmADw2Q0w"
    },
    {
        "track": "Sweet Dreams, TN",
        "artist": "The Last Shadow Puppets",
        "spotify": "https://open.spotify.com/track/1W0OCrMsRP1SLTEdw3JwEz",
        "yt_music": "https://music.youtube.com/watch?v=qBeBqcqdSrk"
    },
    {
        "track": "The Mothership",
        "artist": "Alexandra Savior",
        "spotify": "https://open.spotify.com/track/0eMgmwVRFB6t8wDz67H0aE",
        "yt_music": "https://music.youtube.com/watch?v=tgVldhU1Vd4"
    },
    {
        "track": "'Til You're Mine",
        "artist": "Alexandra Savior",
        "spotify": "https://open.spotify.com/track/5M1km9JQz8tDel1k8fA1vc",
        "yt_music": "https://music.youtube.com/watch?v=YOFnsVFrLcU"
    },
    {
        "track": "Knights of Cydonia",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/7ouMYWpwJ422jRcDASZB7P",
        "yt_music": "https://music.youtube.com/watch?v=oi3QmAmrG6M"
    },
    {
        "track": "Time is Running Out",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/0EdMqiKs9LKXhspeQhl4RZ",
        "yt_music": "https://music.youtube.com/watch?v=8eB2d_saQo4"
    },
    {
        "track": "Soldier's Poem",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/6jH5aCuXgtygWpx7BF54at",
        "yt_music": "https://music.youtube.com/watch?v=aVrK9_R2f2Q"
    },
    {
        "track": "Uprising",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/4VqPOruhp5EdPBeR92t6lQ",
        "yt_music": "https://music.youtube.com/watch?v=Y4R6k8_iIkE"
    },
    {
        "track": "Plug in Baby",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/2UKARCqDrhkYDoVR4FN5Wi",
        "yt_music": "https://music.youtube.com/watch?v=Kler5kYbRqM"
    },
    {
        "track": "Map of the Problematique",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/5YXr4AGfUQpLSxtFSsKUh6",
        "yt_music": "https://music.youtube.com/watch?v=Nw5AMCEiZms"
    },
    {
        "track": "Starlight",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/3skn2lauGk7Dx6bVIt5DVj",
        "yt_music": "https://music.youtube.com/watch?v=2G9_5ZQYXVY"
    },
    {
        "track": "Supermassive Black Hole",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/3lPr8ghNDBLc2uZovNyLs9",
        "yt_music": "https://music.youtube.com/watch?v=N-_mHedypEU"
    },
    {
        "track": "Unnatural Selection",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/28FJMlLUu9NHuwlZWFKDn7",
        "yt_music": "https://music.youtube.com/watch?v=T23AY5gYhpE"
    },
    {
        "track": "MK Ultra",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/0MrkZz4D3fGlEkhebjPPrh",
        "yt_music": "https://music.youtube.com/watch?v=ZAvP8LKMXgA"
    },
    {
        "track": "Apocalypse Please",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/2aQnAQMdzPM1kJteExCnYG",
        "yt_music": "https://music.youtube.com/watch?v=8_seHEENf_Q"
    },
    {
        "track": "Butterflies & Hurricanes",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/5XpJOQgVEuM1FzgeGXzUvk",
        "yt_music": "https://music.youtube.com/watch?v=Yt8I6RgNavc"
    },
    {
        "track": "Hysteria",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/0knbMPVHpFbsx38pLoYSRs",
        "yt_music": "https://music.youtube.com/watch?v=HqAMbWjs5jY"
    },
    {
        "track": "Blackout",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/6p1KkKTYiuou500RtWnWmU",
        "yt_music": "https://music.youtube.com/watch?v=yxJvWjyqQRQ"
    },
    {
        "track": "Fury",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/1yVFPD7XUmdlKfcRF4EoQ7",
        "yt_music": "https://music.youtube.com/watch?v=pAlr_w52L6A"
    },
    {
        "track": "Thoughts of a Dying Atheist",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/37Z46YLWkgwBoouUmyFOuM",
        "yt_music": "https://music.youtube.com/watch?v=jBbrEeo21A4"
    },
    {
        "track": "Exo-Politics",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/20vZII9Yu52czI9Fk4p39r",
        "yt_music": "https://music.youtube.com/watch?v=KAkhzJCzDTc"
    },
    {
        "track": "Bliss",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/0j3obufLXq5toSs592dX9U",
        "yt_music": "https://music.youtube.com/watch?v=8D0ybTfYmCE"
    },
    {
        "track": "New Born",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/2VrJMuLt2m9HbifGrKWHqk",
        "yt_music": "https://music.youtube.com/watch?v=fsB1OzYy9uI"
    },
    {
        "track": "Space Dementia",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/00jXDm9BLNZdf2QC3Br0r7",
        "yt_music": "https://music.youtube.com/watch?v=IxVC8mdOeNQ"
    },
    {
        "track": "Citizen Erased",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/177MZraDAxjRqqtZBz5Vhn",
        "yt_music": "https://music.youtube.com/watch?v=2gDVat2NRpU"
    },
    {
        "track": "Micro Cuts",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/2GflWmANujk7PnmEcv5RbF",
        "yt_music": "https://music.youtube.com/watch?v=a3aRxqYeXlc"
    },
    {
        "track": "Megalomania",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/2S9tY6X04CTb9ZAA2PCpC2",
        "yt_music": "https://music.youtube.com/watch?v=g429yGvJRl0"
    },
    {
        "track": "Futurism",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/6WZ2HHv1VUeRzv3ZnirZsW",
        "yt_music": "https://music.youtube.com/watch?v=KNJDprTjZ14"
    },
    {
        "track": "Resistance",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/1C2QJNTmsTxCDBuIgai8QV",
        "yt_music": "https://music.youtube.com/watch?v=ywpJACWd0dA"
    },
    {
        "track": "City of Delusion",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/3Sno9FE8r2uz8QP0MtnTPL",
        "yt_music": "https://music.youtube.com/watch?v=Nv-cni9Sjpk"
    },
    {
        "track": "Muscle Museum",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/5rupf5kRDLhhFPxH15ZmBF",
        "yt_music": "https://music.youtube.com/watch?v=Vq4fdnW18mE"
    },
    {
        "track": "Unintended",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/6kyxQuFD38mo4S3urD2Wkw",
        "yt_music": "https://music.youtube.com/watch?v=Sp4Lj0hG5DI"
    },
    {
        "track": "I Belong to You",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/114rzL6VEy9bb3amPcY3tw",
        "yt_music": "https://music.youtube.com/watch?v=8ttu6RxqbZg"
    },
    {
        "track": "Exogenesis 1 (Overture)",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/6zkhhG8iQ8waiwGkQuhoE1",
        "yt_music": "https://music.youtube.com/watch?v=wDmOnqrjH7w"
    },
    {
        "track": "Exogenesis 2 (Cross-pollination)",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/39kUTBz4uJoy5VtmIybz9D",
        "yt_music": "https://music.youtube.com/watch?v=VMM1X8aXlCs"
    },
    {
        "track": "Exogenesis 3 (Redemption)",
        "artist": "Muse",
        "spotify": "https://open.spotify.com/track/76ZDwA8uTyMys4LIS3pBUX",
        "yt_music": "https://music.youtube.com/watch?v=wRCzchqOSxk"
    },
    {
        "track": "From The Start",
        "artist": "Laufey",
        "spotify": "https://open.spotify.com/track/43iIQbw5hx986dUEZbr3eN",
        "yt_music": "https://music.youtube.com/watch?v=h8DeZSB2o-c"
    },
    {
        "track": "Lover Girl",
        "artist": "Laufey",
        "spotify": "https://open.spotify.com/track/4nwjvcUjV7cexhwA40Bh5i",
        "yt_music": "https://music.youtube.com/watch?v=Q8TFOBdXZj0"
    },
    {
        "track": "Valentine",
        "artist": "Laufey",
        "spotify": "https://open.spotify.com/track/6cx5CvFhqN19efStehJqoW",
        "yt_music": "https://music.youtube.com/watch?v=Ejvz4EdcXM0"
    },
    {
        "track": "Falling Behind",
        "artist": "Laufey",
        "spotify": "https://open.spotify.com/track/4KGGeE7RJsgLNZmnxGFlOj",
        "yt_music": "https://music.youtube.com/watch?v=Vj2VHNvkBPA"
    },
    {
        "track": "Promise",
        "artist": "Laufey",
        "spotify": "https://open.spotify.com/track/08PdFBcXzpkn1cWNgmKqhn",
        "yt_music": "https://music.youtube.com/watch?v=xlfT2DasD0g"
    },
    {
        "track": "the perfect pair",
        "artist": "beabadoobee",
        "spotify": "https://open.spotify.com/track/41P6Tnd8KIHqON0QIydx6a",
        "yt_music": "https://music.youtube.com/watch?v=WWa28QJEjnQ"
    },
    {
        "track": "Never The Muse",
        "artist": "Elio Mei",
        "spotify": "https://open.spotify.com/track/2Vhkfu6ZDlFsY62eIUUvCQ",
        "yt_music": "https://music.youtube.com/watch?v=HWhWTdLnV0s"
    },
    {
        "track": "Guilty as Sin?",
        "artist": "Taylor Swift",
        "spotify": "https://open.spotify.com/track/799KrpEbhZp0MHeiA8YK9P",
        "yt_music": "https://music.youtube.com/watch?v=rpLCx-fkEX0"
    },
    {
        "track": "The Fate of Ophelia",
        "artist": "Taylor Swift",
        "spotify": "https://open.spotify.com/track/53iuhJlwXhSER5J2IYYv1W",
        "yt_music": "https://music.youtube.com/watch?v=7nVctvQVz0U"
    },
    {
        "track": "Afterglow",
        "artist": "Taylor Swift",
        "spotify": "https://open.spotify.com/track/1SymEzIT3H8UZfibCs3TYi",
        "yt_music": "https://music.youtube.com/watch?v=oNiyHQhYqTc"
    },
    {
        "track": "Call It What You Want",
        "artist": "Taylor Swift",
        "spotify": "https://open.spotify.com/track/1GwMQaZz6Au3QLDbjbMdme",
        "yt_music": "https://music.youtube.com/watch?v=hK-N297-aOI"
    },
    {
        "track": "Let It Happen",
        "artist": "Tame Impala",
        "spotify": "https://open.spotify.com/track/2X485T9Z5Ly0xyaghN73ed",
        "yt_music": "https://music.youtube.com/watch?v=NMRhx71bGo4"
    },
    {
        "track": "Dracula",
        "artist": "Tame Impala",
        "spotify": "https://open.spotify.com/track/1NXbNEAcPvY5G1xvfN57aA",
        "yt_music": "https://music.youtube.com/watch?v=cuMuMnCRfqk"
    },
    {
        "track": "Conquer Or Die",
        "artist": "Megadeth",
        "spotify": "https://open.spotify.com/track/1xdmx0UEYQE5Wl7D7UUt5U",
        "yt_music": "https://music.youtube.com/watch?v=mAIdrXFJh1o"
    },
    {
        "track": "Rosetta Stoned",
        "artist": "TOOL",
        "spotify": "https://open.spotify.com/track/0D8l86LXxKcgKAO17DfQsl",
        "yt_music": "https://music.youtube.com/watch?v=U16W2FfDnkQ"
    },
    {
        "track": "Sharing The Night Together",
        "artist": "Dr. Hook",
        "spotify": "https://open.spotify.com/track/4M0m4FUdc4wD2guhUHogLF",
        "yt_music": "https://music.youtube.com/watch?v=GTUU-qPuR4w"
    },
    {
        "track": "Avant Gardener",
        "artist": "Courtney Barnett",
        "spotify": "https://open.spotify.com/track/49fc6EwdmbgaMKzbi7rT54",
        "yt_music": "https://music.youtube.com/watch?v=ST4TiW3PVsg"
    },
    {
        "track": "Scene Seven: I. The Dance of Eternity",
        "artist": "Dream Theater",
        "spotify": "https://open.spotify.com/track/7FTf3bJuCq5UYHjUwggKNB",
        "yt_music": "https://music.youtube.com/watch?v=eYCYGpu0OxM"
    },
    {
        "track": "Sarılırım Birine",
        "artist": "Adamlar",
        "spotify": "https://open.spotify.com/track/0d7qHnB6CNvn1UsO5i3ElE",
        "yt_music": "https://music.youtube.com/watch?v=GnjRrfFRMf0"
    },
    {
        "track": "Acının İlacı",
        "artist": "Adamlar",
        "spotify": "https://open.spotify.com/track/3xegx5QZeKRjlLTUN1xfX1",
        "yt_music": "https://music.youtube.com/watch?v=MaA-Y_ZNEao"
    },
    {
        "track": "Doldum",
        "artist": "Adamlar",
        "spotify": "https://open.spotify.com/track/2rjHx1Z6JROOW23zirJNvS",
        "yt_music": "https://music.youtube.com/watch?v=IbjW4tKT8jU"
    },
    {
        "track": "Adını Başkasının Koyduğu Çocuklar",
        "artist": "Adamlar",
        "spotify": "https://open.spotify.com/track/1ARj3MQ3jpujRSSL8W3ewX",
        "yt_music": "https://music.youtube.com/watch?v=WTPLe_yXwqw"
    },
    {
        "track": "Hikaye",
        "artist": "Adamlar",
        "spotify": "https://open.spotify.com/track/3YPitUdhzPVFSFPviAOGq6",
        "yt_music": "https://music.youtube.com/watch?v=UJAoDZKsRrA"
    },
    {
        "track": "Giderdi Hoşuma",
        "artist": "Yaşlı Amca",
        "spotify": "https://open.spotify.com/track/2tYWrHXCwKCPO86kgqLemB",
        "yt_music": "https://music.youtube.com/watch?v=xphe-KqAnZU"
    },
    {
        "track": "Kediler Ve Şarkılar",
        "artist": "Yaşlı Amca",
        "spotify": "https://open.spotify.com/track/47lxhJgKvSxWOLD4WzHaUu",
        "yt_music": "https://music.youtube.com/watch?v=84aDLNDYfo0"
    },
    {
        "track": "Giderdi Hoşuma",
        "artist": "Yaşlı Amca",
        "spotify": "https://open.spotify.com/track/2tYWrHXCwKCPO86kgqLemB",
        "yt_music": "https://music.youtube.com/watch?v=K1ludzYvSXg"
    },
    {
        "track": "Ve Ben",
        "artist": "Yaşlı Amca",
        "spotify": "https://open.spotify.com/track/2fZi1pqSST0rTGNTNJOPUT",
        "yt_music": "https://music.youtube.com/watch?v=IAlkGGb6dSk"
    },
    {
        "track": "Sanki Yapamadım",
        "artist": "Yaşlı Amca",
        "spotify": "https://open.spotify.com/track/5w0676WPheT9vPF1yRUprp",
        "yt_music": "https://music.youtube.com/watch?v=r8lO8RDxtnM"
    },
    {
        "track": "İstanbul Beyefendisi",
        "artist": "Yaşlı Amca",
        "spotify": "https://open.spotify.com/track/5JXV2YMrXBHZfzf7cXLIPd",
        "yt_music": "https://music.youtube.com/watch?v=1MIaqvJ8m9E"
    },
    {
        "track": "Keder",
        "artist": "Yaşlı Amca",
        "spotify": "https://open.spotify.com/track/7oAIA5ZElIoG10in4fNlUw",
        "yt_music": "https://music.youtube.com/watch?v=gzy3lkirSWM"
    },
    {
        "track": "Rahatsız Vals",
        "artist": "Son Feci Bisiklet",
        "spotify": "https://open.spotify.com/track/1LB6KkpKJeGWbg9BOy07wS",
        "yt_music": "https://music.youtube.com/watch?v=CLy2jf_WgB4"
    },
    {
        "track": "Fare",
        "artist": "Son Feci Bisiklet",
        "spotify": "https://open.spotify.com/track/0ctRrd1Ynte2Rm3r7Statt",
        "yt_music": "https://music.youtube.com/watch?v=XAZ7mhl772o"
    },
    {
        "track": "It's Over Isn't It",
        "artist": "Steven Universe, Deedee Magno Hall",
        "spotify": "https://open.spotify.com/track/2eqzI3kGqPk93vz8RkASfA",
        "yt_music": "https://music.youtube.com/watch?v=LD6ePgLagcU"
    },
    {
        "track": "Snap",
        "artist": "manifest",
        "spotify": "https://open.spotify.com/track/6PL9TlrphVepxc9shnK2WL",
        "yt_music": "https://music.youtube.com/watch?v=PauIcvh7cfY"
    },
    {
        "track": "Overkill",
        "artist": "RIOT",
        "spotify": "https://open.spotify.com/track/4XdaaDFE881SlIaz31pTAG",
        "yt_music": "https://music.youtube.com/watch?v=OFbNOOjuYSo"
    },
    {
        "track": "Wind",
        "artist": "Akeboshi",
        "spotify": "https://open.spotify.com/track/5BqKtuCFLfZyzfZOwlgW1f",
        "yt_music": "https://music.youtube.com/watch?v=WqGOaOHu5uY"
    },
    {
        "track": "REDRUM",
        "artist": "Bambie Thug",
        "spotify": "https://open.spotify.com/track/0hgxnhFG9BytdwXO1cbHb4",
        "yt_music": "https://music.youtube.com/watch?v=eWZ6VOTF1L8"
    },
    {
        "track": "Egg",
        "artist": "The Garden",
        "spotify": "https://open.spotify.com/track/4Vie7AYSqfGHEP2uBh0ua5",
        "yt_music": "https://music.youtube.com/watch?v=nvCKLOZEzfk"
    },
    {
        "track": "Jump The Gate",
        "artist": "Peach Fuzz",
        "spotify": "https://open.spotify.com/track/6AkmOPz7tUY7XKQm6t8qhT",
        "yt_music": "https://music.youtube.com/watch?v=_lw5DF3YZdo"
    },
    {
        "track": "Ben Nası Büyük Adam Olucam",
        "artist": "Pinhani",
        "spotify": "https://open.spotify.com/track/5lkLK46hfSD1fPHp1ZOrpz",
        "yt_music": "https://music.youtube.com/watch?v=gvqMapZ-WvY"
    },
    {
        "track": "Fırat Ağıtı",
        "artist": "Erkan Oğur",
        "spotify": "https://open.spotify.com/track/3746cVSYCNAiQoctExJAQj",
        "yt_music": "https://music.youtube.com/watch?v=dL33fRjxiRo"
    },
    {
        "track": "Hold the Line",
        "artist": "TOTO",
        "spotify": "https://open.spotify.com/track/4aVuWgvD0X63hcOCnZtNFA",
        "yt_music": "https://music.youtube.com/watch?v=ZP69PLBqFUo"
    },
    {
        "track": "Down with the Sickness",
        "artist": "Disturbed",
        "spotify": "https://open.spotify.com/track/40rvBMQizxkIqnjPdEWY1v",
        "yt_music": "https://music.youtube.com/watch?v=JKmmGegan64"
    }
]

export default songs;