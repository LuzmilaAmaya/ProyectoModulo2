import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { editarCancion } from "../../services/AdminService";

export default function EditarCancion({
  showEditar,
  setShowEditar,
  cancionEditar,
  setCanciones,
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      portadaUrl: "",
      titulo: "",
      artista: "",
      genero: "",
      album: "",
      duracion: "",
    },
  });

  useEffect(() => {
    if (cancionEditar) {
      setValue("portadaUrl", cancionEditar.portadaUrl);
      setValue("titulo", cancionEditar.titulo);
      setValue("artista", cancionEditar.artista);
      setValue("genero", cancionEditar.genero);
      setValue("album", cancionEditar.album);
      setValue("duracion", cancionEditar.duracion);
    }
  }, [cancionEditar, setValue]);

  function onSubmit(data) {
    editarCancion("canciones", cancionEditar.id, data);
    Swal.fire({
      title: "¡Canción editada!",
      text: `${data.titulo} se actualizó correctamente`,
      icon: "success",
      background: "#120C18",
      color: "#ffffff",
      confirmButtonColor: "#2C0F45",
      confirmButtonText: "Aceptar",
    });

    const cancionesActualizadas = JSON.parse(localStorage.getItem("canciones"));
    setCanciones(cancionesActualizadas);
    setShowEditar(false);
  }

  return (
    <div className={`modal ${showEditar ? "d-block" : "d-none"}`}>
      <div className="modal-dialog">
        <div className="modal-content p-4 custom-modal">
          <h5 className="text-center mb-3 modal-title-custom">
            Editar Canción
          </h5>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Portada (URL)</Form.Label>
              <Form.Control
                className="input-dark"
                type="text"
                {...register("portadaUrl", { required: true })}
                isInvalid={errors.portadaUrl}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control
                className="input-dark"
                type="text"
                {...register("titulo", { required: true })}
                isInvalid={errors.titulo}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Artista</Form.Label>
              <Form.Control
                className="input-dark"
                type="text"
                {...register("artista", { required: true })}
                isInvalid={errors.artista}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Género</Form.Label>
              <Form.Control
                className="input-dark"
                type="text"
                {...register("genero", { required: true })}
                isInvalid={errors.genero}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Álbum</Form.Label>
              <Form.Control
                className="input-dark"
                type="text"
                {...register("album", { required: true })}
                isInvalid={errors.album}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Duración</Form.Label>
              <Form.Control
                className="input-dark"
                type="text"
                {...register("duracion", { required: true })}
                isInvalid={errors.duracion}
              />
            </Form.Group>

            <Button type="submit" className="btn-confirm me-2">
              Guardar Cambios
            </Button>
            <Button
              variant="secondary"
              className="btn-cancel"
              onClick={() => setShowEditar(false)}
            >
              Cancelar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
