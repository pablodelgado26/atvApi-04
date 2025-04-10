import prisma from "../../prisma/client.js";

class CursoModel {
  getAll = async () => {
    return await prisma.curso.findMany();
  }

  getById = async (id) => {
    return await prisma.curso.findUnique({
      where: { id },
    });
  }


  create = async (title, instrument, level, duration, price ) => {
    return await prisma.curso.create({
      data: {
        title,
        instrument,
        level,
        duration,
        price,
      },
    })
  };

  update = async (id, concluida) => {
    try {
      const curso = await prisma.curso.update({
        where: { id },
        data: {
          concluida: concluida !== undefined ? concluida : true,
        }
      });
      return curso;
    } catch (error) {
      console.log("Error", error);
      throw error
    }
  };

  delete = async (id) => {
    try {
      const cursoDeletada = await prisma.curso.delete({
        where: { id },
      });
      return cursoDeletada;
    } catch (error) {
      console.error("Error ao deletar a curso!", error);
      throw error;
    }
  };
}
export default new CursoModel();
