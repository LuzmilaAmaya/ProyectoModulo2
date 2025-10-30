import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { agregarCancion } from "../../services/AdminService";
import Swal from "sweetalert2";

export default function NuevaCancion({
  showCrear,
  setShowCrear,
  fetchCanciones,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      id: crypto.randomUUID(),
      portadaUrl: "",
      titulo: "",
      artista: "",
      genero: "",
      album: "",
      duracion: "",
    },
  });

  function onSubmit(data) {
    agregarCancion("canciones", data);
    Swal.fire({
      title: "¡Canción agregada!",
      text: `${data.titulo} fue agregada correctamente`,
      icon: "success",
      background: "#120C18",
      color: "#ffffff",
      confirmButtonColor: "#2C0F45",
      confirmButtonText: "Aceptar",
      customClass: {
        confirmButton: "swal-confirm",
      },
    });

    fetchCanciones();
    reset();
    setShowCrear(false);
  }

  return (
    <Modal show={showCrear} onHide={() => setShowCrear(false)}>
      <div className="custom-modal p-3">
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="text-white">Agregar Canción</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label className="text-light">Portada (URL)</Form.Label>
              <Form.Control
                className="input-dark"
                type="text"
                placeholder="URL de la portada"
                {...register("portadaUrl", { required: true })}
                isInvalid={errors.portadaUrl}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light">Título</Form.Label>
              <Form.Control
                className="input-dark"
                type="text"
                placeholder="Título"
                {...register("titulo", { required: true })}
                isInvalid={errors.titulo}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light">Artista</Form.Label>
              <Form.Control
                className="input-dark"
                type="text"
                placeholder="Artista"
                {...register("artista", { required: true })}
                isInvalid={errors.artista}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light">Género</Form.Label>
              <Form.Control
                className="input-dark"
                type="text"
                placeholder="Ej: Rock"
                {...register("genero", { required: true })}
                isInvalid={errors.genero}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light">Álbum</Form.Label>
              <Form.Control
                className="input-dark"
                type="text"
                placeholder="Álbum"
                {...register("album", { required: true })}
                isInvalid={errors.album}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-light">Duración</Form.Label>
              <Form.Control
                className="input-dark"
                type="text"
                placeholder="Ej: 3:45"
                {...register("duracion", { required: true })}
                isInvalid={errors.duracion}
              />
            </Form.Group>

            <Button type="submit" className="btn-confirm me-2">
              Crear Canción
            </Button>
            <Button className="btn-cancel" onClick={() => setShowCrear(false)}>
              Cancelar
            </Button>
          </Form>
        </Modal.Body>
      </div>
    </Modal>
  );
}
