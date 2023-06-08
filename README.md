## github pages Custom Domain 연결

> Hosting kr

-   github pages url : [계정].github.io

-   A 레코드 추가

    -   github pages url IP 추가

        ```
        $ nslookup rang-ee.github.io
        Server:		168.126.63.1
        Address:	168.126.63.1#53

        Non-authoritative answer:
        Name:	rang-ee.github.io
        Address: 185.199.108.153
        Name:	rang-ee.github.io
        Address: 185.199.109.153
        Name:	rang-ee.github.io
        Address: 185.199.110.153
        Name:	rang-ee.github.io
        Address: 185.199.111.153
        ```

-   CNAME 추가

    -   www과 함께 github pages url 추가

-   정상 등록 확인

    ```
    $ nslookup www.velysound.com
    Server:		168.126.63.1
    Address:	168.126.63.1#53

    Non-authoritative answer:
    www.velysound.com	canonical name = rang-ee.github.io.
    Name:	rang-ee.github.io
    Address: 185.199.111.153
    Name:	rang-ee.github.io
    Address: 185.199.109.153
    Name:	rang-ee.github.io
    Address: 185.199.108.153
    Name:	rang-ee.github.io
    Address: 185.199.110.153
    ```
