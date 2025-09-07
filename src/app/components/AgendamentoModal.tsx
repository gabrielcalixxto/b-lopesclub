"use client";
import { useState } from "react";

interface AgendamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  nome: string;
  telefone: string;
  servico: string;
  data: string;
  horario: string;
}

const servicos = [
  { id: 'corte', nome: 'Corte', preco: 'R$ 30,00' },
  { id: 'barba', nome: 'Barba', preco: 'R$ 20,00' },
  { id: 'cabelo-barba', nome: 'Cabelo e Barba', preco: 'R$ 45,00' },
  { id: 'sombrancelha', nome: 'Sombrancelha', preco: 'R$ 5,00' },
  { id: 'pezinho', nome: 'Pezinho', preco: 'R$ 10,00' }
];

const horarios = [
  '09:00','09:30','10:00','10:30','11:00','11:30',
  '14:00','14:30','15:00','15:30','16:00','16:30',
  '17:00','17:30','18:00','18:30','19:00','19:30'
];

export default function AgendamentoModal({ isOpen, onClose }: AgendamentoModalProps) {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    servico: '',
    data: '',
    horario: ''
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { nome, telefone, servico, data, horario } = formData;
    if (!nome || !telefone || !servico || !data || !horario) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    setLoading(true);
    try {
      const servicoSelecionado = servicos.find(s => s.id === servico);
      const dataFormatada = new Date(data).toLocaleDateString('pt-BR');

      const mensagem = `Olá! Gostaria de confirmar meu agendamento:
👤 Nome: ${nome}
📞 Telefone: ${telefone}
✂️ Serviço: ${servicoSelecionado?.nome} (${servicoSelecionado?.preco})
📅 Data: ${dataFormatada}
🕐 Horário: ${horario}
Agendamento solicitado via site!`;

      window.open(`https://wa.me/5522997364126?text=${encodeURIComponent(mensagem)}`, '_blank');

      alert('Você será redirecionado para o WhatsApp para confirmar.');
      onClose();
      setFormData({ nome: '', telefone: '', servico: '', data: '', horario: '' });
    } catch (error) {
      console.error(error);
      alert('Erro ao processar o agendamento. Tente novamente.');
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Agendar Horário</h2>
            <p className="text-sm text-gray-600">Preencha os detalhes do seu agendamento.</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {['nome','telefone'].map(field => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {field === 'nome' ? 'Nome Completo *' : 'Telefone *'}
              </label>
              <input
                type={field === 'telefone' ? 'tel' : 'text'}
                name={field}
                value={formData[field as keyof FormData]}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Serviço *</label>
            <select
              name="servico"
              value={formData.servico}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Selecione um serviço</option>
              {servicos.map(s => (
                <option key={s.id} value={s.id}>{s.nome} - {s.preco}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Data *</label>
            <input
              type="date"
              name="data"
              value={formData.data}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Horário *</label>
            <select
              name="horario"
              value={formData.horario}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Selecione um horário</option>
              {horarios.map(h => <option key={h} value={h}>{h}</option>)}
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Agendando...' : 'Agendar via WhatsApp'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}