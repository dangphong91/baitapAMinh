function addNewUser() {
    //lay du lieu
    let email = $('#email').val();
    let password = $('#password').val();
    let newUser = {
        email: email,
        password: password,
    };
    // goi ajax
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newUser),
        //tên API
        url: "/",
        //xử lý khi thành công
        success: successHandler

    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();
    document.getElementById("create").style.right = "-600px";
}

function editUser() {
    //lay du lieu
    let id = $('#id1').val();
    let email = $('#email1').val();
    let password = $('#password1').val();
    let newUser = {
        id: id,
        email: email,
        password: password,
    };
    // goi ajax
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        data: JSON.stringify(newUser),
        //tên API
        url: "/",
        //xử lý khi thành công
        success: successHandler

    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();
    document.getElementById("edit").style.right = "-600px";
}

function successHandler() {
    $.ajax({
        type: "GET",
        //tên API
        url: "/list",
        //xử lý khi thành công
        success: function (data) {
            // hien thi danh sach o day
            let content = '    <tr>\n' +
                '        <td>Id</td>\n' +
                '        <td>Name</td>\n' +
                '        <td>Email</td>\n' +
                '        <td>Password</td>\n' +
                '        <td>Phone</td>\n' +
                '        <td>Address</td>\n' +
                '        <td>Action</td>\n' +
                '    </tr>';
            for (let i = 0; i < data.length; i++) {
                content += getUser(data[i]);
            }
            document.getElementById('userList').innerHTML = content;
            $('.deleteUser').click(function (event) {
                //lay du lieu
                let a = $(this);
                let userId = a.attr("href");
                // goi ajax
                $.ajax({
                    type: "DELETE",
                    //tên API
                    url: `/${userId}`,
                    //xử lý khi thành công
                    success: function (data) {
                        a.parent().parent().remove();
                    }

                });
                //chặn sự kiện mặc định của thẻ
                event.preventDefault();
            });
            $('.editUser').click(function (event) {
                //lay du lieu
                let a = $(this);
                let userId = a.attr("href");
                // goi ajax
                $.ajax({
                    type: "GET",
                    //tên API
                    url: `/${userId}`,
                    //xử lý khi thành công
                    success: function (data) {
                        // hien thi danh sach o day
                        document.getElementById('user').innerHTML = getEdit(data);
                    }
                });
                //chặn sự kiện mặc định của thẻ
                event.preventDefault();
            });
        }
    });
}

function getUser(user) {
    return `<tr><td>${user.id}</td><td></td><td >${user.email}</td><td >${user.password}</td><td></td><td></td>` +
        `<td><a class="editUser" href="${user.id}"><button onclick="edit()">Edit</button></a><a class="deleteUser" href="${user.id}"><button>Delete</button></a></td></tr>`;
}

function getEdit(user) {
    return      `<tr>
                    <td><input type="hidden" id="id1" value="${user.id}"></td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td><input type="text" id="email1" value="${user.email}"></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="text" id="password1" value="${user.password}"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="Edit" onclick="editUser()"></td>
                </tr>`
}

$(document).ready(function () {
    //sư kiện nào thực hiện Ajax
    $('.deleteUser').click(function (event) {
        //lay du lieu
        let a = $(this);
        let userId = a.attr("href");
        // goi ajax
        $.ajax({
            type: "DELETE",
            //tên API
            url: `/${userId}`,
            //xử lý khi thành công
            success: function (data) {
                a.parent().parent().remove();
            }

        });
        //chặn sự kiện mặc định của thẻ
        event.preventDefault();
    });
    //sư kiện nào thực hiện Ajax
    $('.editUser').click(function (event) {
        //lay du lieu
        let a = $(this);
        let userId = a.attr("href");
        // goi ajax
        $.ajax({
            type: "GET",
            //tên API
            url: `/${userId}`,
            //xử lý khi thành công
            success: function (data) {
                // hien thi danh sach o day
                document.getElementById('user').innerHTML = getEdit(data);
            }
        });
        //chặn sự kiện mặc định của thẻ
        event.preventDefault();
    });
})