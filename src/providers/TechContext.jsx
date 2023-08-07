import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const { userData, setUserData } = useContext(UserContext);
  const [editModal, setEditModal] = useState(false);
  const [editTech, setEditTech] = useState();
  const [createModal, setCreateModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let userId = window.localStorage.getItem("@USERID");
    !userId && navigate("/");

    async function getUser() {
      try {
        userId = JSON.parse(userId);

        const response = await api.get(`/users/${userId}`);

        setUserData(response.data);
      } catch (error) {}
    }
    getUser();
  }, []);

  function showEditModal(element) {
    setEditTech(element);

    setEditModal(true);
  }

  async function updateUser() {
    let userId = window.localStorage.getItem("@USERID");
    userId = JSON.parse(userId);
    try {
      const response = await api.get(`/users/${userId}`);

      setUserData(response.data);
    } catch (error) {}
  }

  async function editTechRequest(data) {
    let token = window.localStorage.getItem("@TOKEN");
    token = JSON.parse(token);

    try {
      const response = await api.put(`/users/techs/${editTech.id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      updateUser();
      toast.success("Alteração realizada com sucesso!");
    } catch (error) {}
  }

  async function deleteTechRequest() {
    let token = window.localStorage.getItem("@TOKEN");
    token = JSON.parse(token);
    try {
      const response = await api.delete(`/users/techs/${editTech.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Item deletado com sucesso!");
      updateUser();
      closeEditModal();
    } catch (error) {}
  }

  function createTechModal(data) {
    setCreateModal(true);
  }

  function closeEditModal() {
    setEditModal(false);
  }

  function closeCreateModal() {
    setCreateModal(false);
  }

  async function createTechRequest(data) {
    let token = window.localStorage.getItem("@TOKEN");
    token = JSON.parse(token);
    let id= window.localStorage.getItem("@USERID")
    id= JSON.parse(id)

    try {
      const response = await api.post(`/client/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Cliente Adicionado com sucesso!");
      updateUser();
      closeCreateModal();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function logOut() {
    toast.success("Você foi deslogado");
    window.localStorage.clear();
    navigate("/");
  }

  return (
    <TechContext.Provider
      value={{
        editModal,
        setEditModal,
        editTech,
        setEditTech,
        createModal,
        setCreateModal,
        showEditModal,
        logOut,
        createTechRequest,
        createTechModal,
        deleteTechRequest,
        editTechRequest,
        closeEditModal,
        closeCreateModal,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
