export default params=>
`<form class="text-center border border-light p-5" action="#/login" method="post">
<div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" placeholder="Email" name="email" value="">
</div>
<div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" placeholder="Password" name="password" value="">
</div>

<button type="submit" class="btn btn-primary">Login</button>
</form>`

