function obtenerUsuarios() {
    fetch(apiUrlUsuarios)
    .then(response => response.json())
    .then(usuarios => {
        const usuariosDiv = document.getElementById('usuarios');
        usuariosDiv.innerHTML = '';
        usuarios.forEach(usuario => {
            usuariosDiv.innerHTML += `<div class="usuario">${usuario.nombre} (${usuario.email})</div>`;
        });
    });
}

function crearUsuario() {
    const nombre = document.getElementById('nombreUsuario').value;
    const email = document.getElementById('emailUsuario').value;
    const nuevoUsuario = { nombre, email };

    fetch(apiUrlUsuarios, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoUsuario)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        obtenerUsuarios();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function obtenerProductos() {
    fetch(apiUrlProductos)
    .then(response => response.json())
    .then(productos => {
        const productosDiv = document.getElementById('productos');
        productosDiv.innerHTML = '';
        productos.forEach(producto => {
            productosDiv.innerHTML += `<div class="producto">${producto.nombre} (${producto.precio})</div>`;
        });
    });
}

function crearProducto() {
    const nombre = document.getElementById('nombreProducto').value;
    const precio = document.getElementById('precioProducto').value;
    const nuevoProducto = { nombre, precio };

    fetch(apiUrlProductos, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoProducto)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        obtenerProductos();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function obtenerPedidos() {
    fetch(apiUrlPedidos)
    .then(response => response.json())
    .then(pedidos => {
        const pedidosDiv = document.getElementById('pedidos');
        pedidosDiv.innerHTML = '';
        pedidos.forEach(pedido => {
            pedidosDiv.innerHTML += `<div class="pedido">Usuario ID: ${pedido.usuario_id}, Producto ID: ${pedido.producto_id}, Cantidad: ${pedido.cantidad}</div>`;
        });
    });
}

function crearPedido() {
    const usuarioId = document.getElementById('usuarioIdPedido').value;
    const productoId = document.getElementById('productoIdPedido').value;
    const cantidad = document.getElementById('cantidadPedido').value;
    const nuevoPedido = { usuario_id: usuarioId, producto_id: productoId, cantidad };

    fetch(apiUrlPedidos, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoPedido)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        obtenerPedidos();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

