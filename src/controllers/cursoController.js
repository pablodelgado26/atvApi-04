import cursoModel from "../models/cursoModel.js";

class CursoController {
  getAll = async (req, res) => {
    try {
      const cursos = await cursoModel.getAll();
      res.json(cursos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar cursos" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const curso = await cursoModel.getById(Number(id));
      if (!curso) {
        return res.status(404).json({ erro: "curso não encontrada" });
      }
      res.json(curso);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar curso" });
    }
  }

  create = async (req, res) => {
    const { title, instrument, level, duration, price } = req.body;
    try {
      if (!title || !instrument || !level || !duration || !price) {
        return res.status(400).json({ erro: "Informações são obrigatórias" });
      }
      const novoCurso = await cursoModel.create(title, instrument, level, duration, price);
      res.status(201).json(novoCurso);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar curso" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { title, instrument, level, duration, price, instructor, maxStudents } = req.body;
    try {
      const cursoAtualizado = await cursoModel.update(Number(id), title, instrument, level, duration, price, instructor, maxStudents);
      if (!cursoAtualizado) {
        return res.status(404).json({ erro: "curso não encontrada" });
      }
      res.json(cursoAtualizado)
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar curso" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;
    try {
      const sucesso = await cursoModel.delete(Number(id));
      if (!sucesso) {
        return res.status(404).json({ erro: "curso não encontrada" });
      }
      res.status(200).send({ message: "curso deletada com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao deletar curso" });
    }
  };
}
export default new CursoController();